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

let row
let column
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
        console.log("hits array: ")
        console.log(hits)
        console.log("alreadyHit array: " )
        console.log(alreadyHit)
        let message2
        if (hits.length > 0) {
            row = hits[hits.length - 1][0]
            column = hits[hits.length - 1][1]
            if (alreadyHit.includes((row + 1) * 10 + column)) {
                if (alreadyHit.includes((row - 1) * 10 + column)) {
                    if (alreadyHit.includes(row * 10 + column + 1)) {
                        if (alreadyHit.includes(row * 10 + column - 1)) {
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
            alreadyHit.push(row * 10 + column)
        }
        if (message2 === "miss") {
            alreadyHit.push(row * 10 + column)
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