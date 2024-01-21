import Player from "./player";
import ComputerAI from "./computerAI";
import loadBoardUI from "./boardUI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()
    loadBoardUI(player, computerAI)


    
}

/* async function play() {
    await player.sendAttack()
    computerAI.randomAttack()
}

function switchTurn (justPlayed) {
    justPlayed == player : computerAI ? player
} */