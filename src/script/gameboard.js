import Ship from "./ship"

export default class Gameboard {
    constructor() {
        this.missedHits = []
        this.board = []
        this.createBoard()
    }

    createBoard () {
        for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push([true])
            }
        }
    }

    placeShip (ship, coordinates) {
        const row = coordinates[0]
        const column = coordinates[1]
        for (let i = 0; i < ship.length; i++) {
            this.board[row][column + i] = ship
        }
    }

    receiveAttack (coordinates) {
        const row = coordinates[0]
        const column = coordinates[1]
        if (this.board[row][column]) {
            if (this.board[row][column] instanceof Ship) {
                this.board[row][column].hit()            
            } else {
                this.missedHits.push(coordinates)
            }
            this.board[row][column] = false
        } else {
            return "already attacked"
        }
    }
}
