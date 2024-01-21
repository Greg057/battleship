export default function loadShipUI (board) {
    const boardCells = document.querySelectorAll(".board-cell")

    boardCells.forEach(cell => {
        if (!ships.length) {
            return
        }
        cell.addEventListener("click", () => addShip(cell, board)) 
    })
}

function addShip(cell, board) {
    const ship = ships[0]
    board.placeShip(ship, `${cell.id[0]}`, `${cell.id[1]}`, "x")
    for (let i = 0; i < ship.length; i++) {
        console.log(i)
        const cellTarget = document.getElementById(`${Number(cell.id) + i}`)
        cellTarget.classList.add("ship-cell")
    }  
    ships.shift()
}

const ships = [{name: "carrier", length: 5},
            {name: "battleship", length: 4},
            {name: "destroyer", length: 3},
            {name: "submarine", length: 3},
            {name: "cruiser", length: 2}]