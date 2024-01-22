import Gameboard from "./gameboard";
import { updateBoardUI } from "./boardUI";

export default class Player {
    constructor () {
        this.gameboard = new Gameboard()
    }

    sendAttack (row, column, defender) {
        const message = defender.gameboard.receiveAttack(row, column)
        if (message === "already hit") return "already hit"
        updateBoardUI(message, row, column, defender)
        if (message === "hit") return "hit"
        if (message === "Game Over") return "Game Over"
    }
}