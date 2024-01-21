import Player from "./player";

export default function loadUI (player, computer) {
    const playerBoard = document.querySelector(".player-board")
    let rowID = 0
    player.gameboard.board.forEach((arr) => { 
        let columnID = 0
        arr.forEach(() => {
            const cell = document.createElement("div")
            cell.classList.add("board-cell") 
            cell.id = `${rowID}${columnID}`
            playerBoard.appendChild(cell)
            columnID++
        })
        rowID++
    });
    
    return playerBoard

}