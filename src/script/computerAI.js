import Gameboard from "./gameboard";
import { updateBoardUI } from "./boardUI";

export default class ComputerAI{
    constructor () {
        this.gameboard = new Gameboard()
    }

    placeShipRandomly(ships) {
        this.gameboard.placeShipRandom(ships)
    }

    randomAttack (player, row, column) {
        let message
        message = player.gameboard.receiveAttack(row, column)
        updateBoardUI(message, row, column, player)
        return message
    }

}