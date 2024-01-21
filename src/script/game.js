import Player from "./player";
import ComputerAI from "./computerAI";
import loadUI from "./UI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()
    loadUI(player, computerAI)


    
}

/* async function play() {
    await player.sendAttack()
    computerAI.randomAttack()
}

function switchTurn (justPlayed) {
    justPlayed == player : computerAI ? player
} */