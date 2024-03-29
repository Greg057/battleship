import Gameboard from "./gameboard";
import { updateBoardUI } from "./boardUI";

export default class Player {
    constructor () {
        this.gameboard = new Gameboard()
    }

    sendAttack (row, column, defender) {
        const message = defender.gameboard.receiveAttack(row, column)
        updateBoardUI(message, row, column, defender)
        return message
    }
}