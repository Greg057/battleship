import Player from "./player";
import ComputerAI from "./computerAI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()

    
}

/* async function play() {
    await player.sendAttack()
    computerAI.randomAttack()
}

function switchTurn (justPlayed) {
    justPlayed == player : computerAI ? player
} */