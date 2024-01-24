import Player from "./player";
import ComputerAI from "./computerAI";
import loadBoardUI from "./boardUI";

export default function createGame () {
    const boardComputer = document.querySelector(".computer")
    boardComputer.style.display = "none"
    const player = new Player()
    const computerAI = new ComputerAI()
    loadBoardUI(player, computerAI)    
}

export function playGame (player, computerAI) {
    setupUI ()
    createClickEvent (player, computerAI)
}

function createClickEvent (player, computerAI) {
    const computerBoard = document.querySelector(".computer-board")
    computerBoard.style.cursor = "pointer"
    computerBoard.addEventListener("click", (event) => {
        computerBoard.style.cursor = "not-allowed"
        gameRound(event, player, computerAI)
    }, {once : true})
}


let hits = []
let alreadyHit = []

async function gameRound (event, player, computerAI) {
    let message
    try {
        message = player.sendAttack(event.target.id[0], event.target.id[1], computerAI)
    } catch {
        createClickEvent(player, computerAI)
        return
    }
    
    if (message === "Game Over") {
        showDialog ("player")
        return
    } else if (message === "already hit" || message === "hit") {
        createClickEvent(player, computerAI)
        return
    }

    let row
    let column
    let cell
    let delay = true
    let play = true
    while (play === true) {
        let message2
        if (hits.length > 0) {
            row = hits[hits.length - 1][0]
            column = hits[hits.length - 1][1]

            let call = 0
            if (hits.length > 1) {
                if (row === hits[hits.length - 2][0]) {
                    cell = changeColumn(row, column, call)
                }
                else if (column === hits[hits.length - 2][1]) {
                    cell = changeRow(row, column, call)
                }
                console.log(cell)
                row = cell.row
                column = cell.column
            } 
            else {
                if (arrIncludesArr(alreadyHit, [row + 1, column]) || ((row + 1) > 9)) {
                    if (arrIncludesArr(alreadyHit, [row - 1, column]) || ((row - 1) < 0)) {
                        if (arrIncludesArr(alreadyHit, [row, column + 1]) || ((column + 1) > 9)) {
                            if (arrIncludesArr(alreadyHit, [row, column - 1]) || ((column - 1) < 0)) {
                                row = Math.floor(Math.random() * 10)
                                column = Math.floor(Math.random() * 10)
                            } else {
                                column -= 1
                            }
                        } else {
                            column += 1
                        }
    
                    } else {
                        row -= 1
                    }
    
                } else {
                    row += 1
                }
            }

            
        } else {
            row = Math.floor(Math.random() * 10)
            column = Math.floor(Math.random() * 10)
        }
        message2 = await computerAttack (computerAI, player, row, column, delay)
        if (message2 === "Game Over") {
            play = false
            showDialog ("computer")
            return
        }  
        if (message2 === "hit") {
            hits.push([row, column])
            alreadyHit.push([row, column])
 
        }
        else if (message2 === "miss") {
            alreadyHit.push([row, column])
        }
        if (message2 === "already hit") {
            delay = false
        } else {
            delay = true
        }
        if (message2 === "hit" || message2 === "already hit") {
            play = true
        } else {
            play = false
        }
        
    }
    createClickEvent(player, computerAI)               
}

export function changeColumn (row, column, call) {
    call++
    let i = 0
    let addToColumn = 0
    if (arrIncludesArr(alreadyHit, [row, column + 1]) && arrIncludesArr(hits, [row, column + 1]) === false) {
        if (column > 0) {
            while (arrIncludesArr(alreadyHit, [row, column - i]) && arrIncludesArr(hits, [row, column - i]) && (column - addToColumn > 0)) {
                addToColumn -= 1
                i++
            }
        }
        else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) === false && arrIncludesArr(hits, [row, column - 1]) === false) {
        if (column > 0) {
            addToColumn -= 1
        } else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        } 
    } 
    else if (arrIncludesArr(alreadyHit, [row, column + 1]) === false && arrIncludesArr(hits, [row, column + 1]) === false) {
        if (column < 9) {
            addToColumn += 1
        } else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) && arrIncludesArr(hits, [row, column - 1]) === false) {
        if (column < 9) {
            i = 0
            while (arrIncludesArr(alreadyHit, [row, column + i]) && arrIncludesArr(hits, [row, column + i]) && (column + addToColumn) < 9) {
                addToColumn += 1
                i++
            } 
        }
        else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } 
    
    column += addToColumn
    if (arrIncludesArr(alreadyHit, [row, column]) || column < 0) {
        hits = []
        column = Math.floor(Math.random() * 10)
        row = Math.floor(Math.random() * 10)
    }
    console.log("from changeColumn: " + row + ", column : " + column)
    return { row, column }
}

export function changeRow (row, column, call) {
    call++
    let i = 0
    let addToRow = 0
    if (arrIncludesArr(alreadyHit, [row + 1, column]) && arrIncludesArr(hits, [row + 1, column]) === false) {
        if (row > 0) {
            while (arrIncludesArr(alreadyHit, [row - i, column]) && arrIncludesArr(hits, [row - i, column]) && (row + addToRow) > 0) {
                addToRow -= 1
                i++
            }
        }
        else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) === false && arrIncludesArr(hits, [row - 1, column]) === false) {
        if (row > 0) {
            addToRow -= 1
        } else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        } 
    }
    else if (arrIncludesArr(alreadyHit, [row + 1, column]) === false && arrIncludesArr(hits, [row + 1, column]) === false) {
        if (row < 9) {
            addToRow += 1
        } else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) && arrIncludesArr(hits, [row - 1, column]) === false) {
        if (row < 9) {
            i = 0
            while (arrIncludesArr(alreadyHit, [row + i, column]) && arrIncludesArr(hits, [row + i, column]) && (row + addToRow) < 9) {
                addToRow += 1
                i++
            } 
        }
        else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } 
    
    row += addToRow
    if (arrIncludesArr(alreadyHit, [row, column]) || row < 0) {
        hits = []
        column = Math.floor(Math.random() * 10)
        row = Math.floor(Math.random() * 10)
    }

    console.log("from changeRow: " + row + ", column : " + column)
    return { row, column }
}

async function computerAttack (computerAI, player, row, column, delay) {
    let message2 
    if (delay) {
        setTimeout(() => {
            message2 = computerAI.randomAttack(player, row, column)  
        }, 1000);
        await sleep(2000)
    } else {
        message2 = computerAI.randomAttack(player, row, column)
    }
    return message2
}

export function arrIncludesArr (bigArr, arrCheck) {
    return bigArr.some(arr => {
        return (arr[0] === arrCheck[0] && arr[1] === arrCheck[1])
    })
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setupUI () {
    const boardComputer = document.querySelector(".computer")
    boardComputer.style.display = "block"
    document.querySelector(".ship-placement").style.display = "none"
    document.querySelector("h2").textContent = "Ready to fire Captain!"
}

function showDialog (winner) {
    const dialog = document.querySelector("dialog")
    const dialogText = dialog.querySelector("h2")
    if (winner === "player") dialogText.textContent = "You Won"
    if (winner === "computer") dialogText.textContent = "You Lost"
    dialog.showModal()
    const btn = dialog.querySelector("button")
    btn.addEventListener("click", () => {
        dialog.close()
        cleanUpForNewGame()
        createGame()
    })
}

function cleanUpForNewGame() {
    document.querySelector(".ship-placement").style.display = "flex"
    document.querySelector(".ship-placement").innerHTML = `<button id="change-rotation">Change Rotation</button>
                                                            <h4>Carrier</h4>
                                                            <h4>Battleship</h4>
                                                            <h4>Destroyer</h4>
                                                            <h4>Submarine</h4>
                                                            <h4>Cruiser</h4>`
    document.querySelector(".player-board").innerHTML = ""
    document.querySelector(".computer-board").innerHTML = ""
    document.querySelector(".main-container").querySelector("h2").textContent = "Place your ships to begin!"
    hits = []
    alreadyHit = []
}