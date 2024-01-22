import Gameboard from "./gameboard";
import { updateBoardUI } from "./boardUI";

export default class ComputerAI{
    constructor () {
        this.gameboard = new Gameboard()
    }

    placeShipRandomly(ships) {
        this.gameboard.placeShipRandom(ships)
    }

    randomAttack (player) {
        const row = Math.floor(Math.random() * 10)
        const column = Math.floor(Math.random() * 10)
        let message
        player.gameboard.board[row][column] 
                        ? message = player.gameboard.receiveAttack(row, column)
                        : this.randomAttack (player)
        updateBoardUI(message, row, column, player)
        if (message === "Game Over") return "Game Over"
    }

}