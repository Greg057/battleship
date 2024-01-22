export default function gameUI (player, computerAI) {
    const computerBoard = document.querySelector(".computer-board")
    const computerBoardCells = computerBoard.querySelectorAll(".board-cell")
    computerBoardCells.forEach(cell => cell.addEventListener("click", () => player.sendAttack(cell.id[0], cell.id[1], computerAI.gameboard)))
}