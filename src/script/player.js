import Gameboard from "./gameboard";

export default class Player {
    constructor () {
        this.gameboard = new Gameboard()
    }

    sendAttack (row, column, gameboard) {
        gameboard.receiveAttack(row, column)
    }
}