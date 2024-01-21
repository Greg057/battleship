import loadShipUI from "./shipUI"

export default function loadBoardUI (player, computer) {
    const playerBoard = document.querySelector(".player-board")
    createGrid(player.gameboard.board, playerBoard)

    const computerBoard = document.querySelector(".computer-board")
    createGrid(computer.gameboard.board, computerBoard)

    loadShipUI(player.gameboard)

    return playerBoard, computerBoard
}

function createGrid (board, div) {
    let rowID = 0
    board.forEach((arr) => { 
        let columnID = 0
        arr.forEach(() => {
            const cell = document.createElement("div")
            cell.classList.add("board-cell") 
            cell.id = `${rowID}${columnID}`
            // cell.addEventListener("click", (e) => console.log(e.target.id))
            div.appendChild(cell)
            columnID++
        })
        rowID++
    });
}