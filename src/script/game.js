import Player from "./player";
import ComputerAI from "./computerAI";
import loadBoardUI from "./boardUI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()
    loadBoardUI(player, computerAI)    
}

export function playGame (player, computerAI) {
    const computerBoard = document.querySelector(".computer-board")
    const computerBoardCells = computerBoard.querySelectorAll(".board-cell")
    console.table(computerAI.gameboard.board)
    let gameStop = false
    computerBoardCells.forEach(cell => cell.addEventListener("click", () => {
        if (gameStop === true) return
        const message = player.sendAttack(cell.id[0], cell.id[1], computerAI)
        if (message === "Game Over") {
            gameStop = true
            return
        } else if (message === "already hit") {
            return
        }
        const message2 = computerAI.randomAttack(player)        
        if (message2 === "Game Over") {
            gameStop = true
            return
        }        
    }))
}