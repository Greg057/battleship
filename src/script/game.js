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
    computerBoardCells.forEach(cell => cell.addEventListener("click", () => {
        player.sendAttack(cell.id[0], cell.id[1], computerAI)
        computerAI.randomAttack(player)        
        
    }))
}