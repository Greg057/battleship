export default function loadShipUI (board) {
    const playerBoard = document.querySelector(".player-board")
    const changeRotation = document.querySelector("#change-rotation")

    const boardCells = document.querySelector(".player-board").querySelectorAll(".board-cell")

    let rotation = "x"
    changeRotation.addEventListener("click", () => {rotation === "x" ? rotation = "y" : rotation = "x"})

    let clicks = 0
    boardCells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => hoverUI(cell, ships[clicks], rotation, e))
        cell.addEventListener("mouseout", (e) => hoverUI(cell, ships[clicks], rotation, e))
        cell.addEventListener("click", () => {
            if (clicks === 5) return
            if (addShip(cell, board, ships[clicks], rotation) === false) return
            clicks++
        })
    })
    

}

function hoverUI (cell, ship, rotation, event) {
    for (let i = 0; i < ship.length; i++) {
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else if (Number(cell.id) + i > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else if (Number(cell.id) + i * 10 > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        if (newCell.classList.contains("ship-cell")) {
            return
        } else {
            if (event.type == 'mouseout') {
                newCell.style.backgroundColor = "black";
            }
            if (event.type == 'mouseover') {
                
                newCell.style.backgroundColor = "red";
            }
        }
            
        //newCell.style.backgroundColor = "red";
        
    } 
    /* cell.addEventListener("click", () => {
        if (clicks === 5) return
        if (addShip(cell, board, ship, rotation) === false) return
        clicks++
    }, { once: true}) */
} 

function addShip(cell, board, ship, rotation) {
    if (board.placeShip(ship, `${cell.id[0]}`, `${cell.id[1]}`, rotation) === false) return false
    for (let i = 0; i < ship.length; i++) {
        
        console.log(cell.id)
        cell.classList.add("ship-cell")
    }  
}

const ships = [{name: "carrier", length: 5},
            {name: "battleship", length: 4},
            {name: "destroyer", length: 3},
            {name: "submarine", length: 3},
            {name: "cruiser", length: 2}]