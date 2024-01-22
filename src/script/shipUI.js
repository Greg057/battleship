import { playGame } from "./game"

const ships = [{name: "carrier", length: 5},
            {name: "battleship", length: 4},
            {name: "destroyer", length: 3},
            {name: "submarine", length: 3},
            {name: "cruiser", length: 2}]


const BORDER_STYLE = "2px solid #9e7ff0"

export default function loadShipUI (player, computerAI) {
    computerAI.placeShipRandomly(ships)
    const board = player.gameboard
    const changeRotation = document.querySelector("#change-rotation")

    const boardCells = document.querySelector(".player-board").querySelectorAll(".board-cell")

    let rotation = "x"
    changeRotation.addEventListener("click", () => {rotation === "x" ? rotation = "y" : rotation = "x"})

    let clicks = 0
    boardCells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            cell.style.cursor = "not-allowed"
            if (clicks === 5) {
                playGame (player, computerAI)
                clicks++
            } else if (clicks < 5) {
                hoverUI(cell, ships[clicks], rotation, e)
            }
        })
        cell.addEventListener("mouseout", (e) => {
            if (clicks === 5) {
                playGame (player, computerAI)
                clicks++
            } else if (clicks < 5) {
                hoverUI(cell, ships[clicks], rotation, e)
            }
        })
        cell.addEventListener("click", () => {
            if (clicks === 5) {
                playGame (player, computerAI)
            } else if (clicks < 5) {
                if (addShip(cell, board, ships[clicks], rotation) === false) return  
            }
            clicks++
        })
    })
}

function hoverUI (cell, ship, rotation, event) {
    cell.style.cursor = "pointer"
    for (let i = 0; i < ship.length; i++) {
        
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id[1]) + ship.length > 10) {
                cell.style.cursor = "not-allowed"
            }
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else if (Number(cell.id) + i > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (Number(cell.id[0]) + ship.length > 10) {
                cell.style.cursor = "not-allowed"
            }
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else if (Number(cell.id) + i * 10 > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        
        if (newCell.style.backgroundColor == "black") {
            cell.style.cursor = "not-allowed"
            document.querySelectorAll(".green-hover").forEach(cell => cell.style.backgroundColor = "red")
        } else {
            if (event.type == 'mouseout') {
                newCell.style.backgroundColor = "#004080";
                newCell.classList.remove("green-hover")
            }
            if (event.type == 'mouseover') {
                if (cell.style.cursor === "not-allowed") {
                    newCell.style.backgroundColor = "red";
                } else {
                    newCell.style.backgroundColor = "#04e004";
                    newCell.classList.add("green-hover")
                }
                
                
                
            }
        }  
    } 
} 

function addShip(cell, board, ship, rotation) {
    if (board.placeShip(ship, `${cell.id[0]}`, `${cell.id[1]}`, rotation) === false) return false
    for (let i = 0; i < ship.length; i++) {
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        newCell.classList.remove("green-hover")
        newCell.style.backgroundColor = "black";
        styleBorders (i, newCell, rotation, ship)
        const shipNames = document.querySelector(".ship-placement").querySelectorAll("h4")
        shipNames.forEach(shipName => {
            if (shipName.textContent.toLowerCase() === ship.name) {
                shipName.innerHTML = `<del>${shipName.textContent}</del>`
                shipName.style.opacity = "0.5"
            }
        })
    }  
}

function styleBorders (i, newCell, rotation, ship) {
    if (rotation === "y") {
        if (i === 0) {
            newCell.style.borderTop = BORDER_STYLE
        }
        else if (i === ship.length - 1) {
            newCell.style.borderBottom = BORDER_STYLE
        }
        newCell.style.borderRight = BORDER_STYLE
        newCell.style.borderLeft = BORDER_STYLE
    } else if (rotation === "x") {
        if (i === 0) {
            newCell.style.borderLeft = BORDER_STYLE
        }
        else if (i === ship.length - 1) {
            newCell.style.borderRight = BORDER_STYLE
        }
        newCell.style.borderTop = BORDER_STYLE
        newCell.style.borderBottom = BORDER_STYLE
    }
}

