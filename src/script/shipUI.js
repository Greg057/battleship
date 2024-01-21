export default function loadShipUI (board) {
    const playerBoard = document.querySelector(".player-board")
    const changeRotation = document.querySelector("#change-rotation")

    const boardCells = document.querySelector(".player-board").querySelectorAll(".board-cell")

    let rotation = "x"
    changeRotation.addEventListener("click", () => {rotation === "x" ? rotation = "y" : rotation = "x"})

    let clicks = 0
    console.log(boardCells)
    boardCells.forEach(cell => {
        cell.addEventListener("mouseover", (event) => hoverUI(ships[clicks], rotation, event))
        cell.addEventListener("mouseout", (event) => hoverUI(ships[clicks], rotation, event))
    })
    playerBoard.addEventListener("click", (event) => {
        if (clicks === 5) return
        if (addShip(event, board, ships[clicks], rotation) === false) return
        clicks++
    })

}

function hoverUI (ship, rotation, event) {
    console.log("hi")
    for (let i = 0; i < ship.length; i++) {
        let cell;
        if (rotation === "x") {
            if (event.target.id[0] === "0") {
                cell = document.getElementById(`0${Number(event.target.id) + i}`)
            } else {
                cell = document.getElementById(`${Number(event.target.id) + i}`)
            }
        } else if (rotation === "y") {
            cell = document.getElementById(`${Number(event.target.id) + i * 10}`)
        }
        if (event.type == 'mouseover') {
            cell.style.backgroundColor = "red";
          }
          if (event.type == 'mouseout') {
            cell.style.backgroundColor = "black";
          }
        
    } 

} 

function addShip(event, board, ship, rotation) {
    if (board.placeShip(ship, `${event.target.id[0]}`, `${event.target.id[1]}`, rotation) === false) return false
    for (let i = 0; i < ship.length; i++) {
        let cell;
        if (rotation === "x") {
            if (event.target.id[0] === "0") {
                cell = document.getElementById(`0${Number(event.target.id) + i}`)
            } else {
                cell = document.getElementById(`${Number(event.target.id) + i}`)
            }
        } else if (rotation === "y") {
            cell = document.getElementById(`${Number(event.target.id) + i * 10}`)
        }
        cell.classList.add("ship-cell")
    }  
}

const ships = [{name: "carrier", length: 5},
            {name: "battleship", length: 4},
            {name: "destroyer", length: 3},
            {name: "submarine", length: 3},
            {name: "cruiser", length: 2}]