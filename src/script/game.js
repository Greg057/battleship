import Player from "./player";
import ComputerAI from "./computerAI";
import loadBoardUI from "./boardUI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()
    loadBoardUI(player, computerAI)    
}

export function playGame (player, computerAI) {
    document.querySelector(".ship-placement").style.display = "none"
    document.querySelector("h2").textContent = "Ready to fire Captain!"
    const computerBoard = document.querySelector(".computer-board")
    computerBoard.style.cursor = "pointer"
    const computerBoardCells = computerBoard.querySelectorAll(".board-cell")
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