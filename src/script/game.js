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
    //const computerBoardCells = computerBoard.querySelectorAll(".board-cell")

    computerBoard.addEventListener("click", (event) => {
        computerBoard.style.cursor = "not-allowed"
        gameRound(event, player, computerAI)
    }, {once : true})
}


let hits = []
let alreadyHit = []

async function gameRound (event, player, computerAI) {
    const message = player.sendAttack(event.target.id[0], event.target.id[1], computerAI)
    if (message === "Game Over") {
        showDialog ("player")
        return
    } else if (message === "already hit" || message === "hit") {
        createClickEvent(player, computerAI)
        return
    }

    let delay = true
    let play = true
    while (play === true) {
        let message2
        console.log(hits)
        if (hits.length > 0) {
            let row = hits[hits.length - 1][0]
            let column = hits[hits.length - 1][1]
            let addToRow = 0
            let addToColumn = 0

            if (hits.length > 1) {
                if (row == hits[hits.length - 2][0]) {
                    let i = 0
                    if (arrIncludesArr(alreadyHit, [row, column + 1]) && arrIncludesArr(hits, [row, column + 1]) === false && column > 0) {
                        while (arrIncludesArr(alreadyHit, [row, column - i]) && arrIncludesArr(hits, [row, column - i]) && (column - addToColumn >= 0)) {
                            addToColumn -= 1
                            i++
                        }
                    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) === false && arrIncludesArr(hits, [row, column - 1]) === false && column > 0) {
                        addToColumn -= 1
                    } 
                    else if (arrIncludesArr(alreadyHit, [row, column + 1]) === false && arrIncludesArr(hits, [row, column + 1]) === false && column < 9) {
                        addToColumn += 1
                    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) && arrIncludesArr(hits, [row, column - 1]) === false  && column < 9) {
                        i = 0
                        while (arrIncludesArr(alreadyHit, [row, column + i]) && arrIncludesArr(hits, [row, column + i]) && (column + addToColumn) <= 9) {
                            addToColumn += 1
                            i++
                        } 
                    } 
                    
                    column += addToColumn
                    if (arrIncludesArr(alreadyHit, [row, column])) {
                        hits = []
                        row = Math.floor(Math.random() * 10)
                        column = Math.floor(Math.random() * 10)
                    }
                    
                    
                       
                }
                
                
                else if (column === hits[hits.length - 2][1]) {
                    let i = 0
                    if (arrIncludesArr(alreadyHit, [row + 1, column]) && arrIncludesArr(hits, [row + 1, column]) === false && row > 0) {
                        while (arrIncludesArr(alreadyHit, [row - i, column]) && arrIncludesArr(hits, [row - i, column]) && (row + addToRow) >= 0) {
                            addToRow -= 1
                            i++
                        }
                    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) === false && arrIncludesArr(hits, [row - 1, column]) === false && row > 0) {
                        addToRow -= 1
                    }
                    else if (arrIncludesArr(alreadyHit, [row + 1, column]) === false && arrIncludesArr(hits, [row + 1, column]) === false && row < 9) {
                        addToRow += 1
                    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) && arrIncludesArr(hits, [row - 1, column]) === false && row < 9) {
                        i = 0
                        while (arrIncludesArr(alreadyHit, [row + i, column]) && arrIncludesArr(hits, [row + i, column]) && (row + addToRow) <= 9) {
                            addToRow += 1
                            i++
                        } 
                    } 
                    
                    row += addToRow
                    if (arrIncludesArr(alreadyHit, [row, column])) {
                        hits = []
                        row = Math.floor(Math.random() * 10)
                        column = Math.floor(Math.random() * 10)
                    }
                }

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
        if (message2 === "miss") {
            alreadyHit.push([row, column])
        }
        if (message2 === "already hit") {
            delay = false
        }
        if (message2 === "hit" || message2 === "already hit") {
            play = true
        } else {
            play = false
        }
        
    }
    createClickEvent(player, computerAI)               
}

async function computerAttack (computerAI, player, row, column, delay) {
    let message2 
    if (delay) {
        setTimeout(() => {
            message2 = computerAI.randomAttack(player, row, column)  
        }, 1000);
        await sleep(1000)
    } else {
        message2 = computerAI.randomAttack(player, row, column)
    }
    return message2
}

export function arrIncludesArr (bigArr, arrCheck) {
    bigArr.some(arr => {
        arr === arrCheck
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
}