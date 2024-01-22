import Gameboard from "./gameboard";

export default class ComputerAI{
    constructor () {
        this.gameboard = new Gameboard()
    }

    placeShipRandomly(ships) {
        this.gameboard.placeShipRandom(ships)
    }

    randomAttack (gameboard) {
        const row = Math.floor(Math.random() * 10)
        const column = Math.floor(Math.random() * 10)
        gameboard.board[row][column] 
                        ? gameboard.receiveAttack(row, column)
                        : randomAttack (gameboard)
    }

}