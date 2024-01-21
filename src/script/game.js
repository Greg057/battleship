import Player from "./player";
import ComputerAI from "./computerAI";

export default function createGame () {
    const player = new Player()
    const computerAI = new ComputerAI()

    while (not game over) {
        play()
    }
}

async function play() {
    await player.sendAttack()
    computerAI.randomAttack()
}