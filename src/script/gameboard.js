import Ship from "./ship"

export default class Gameboard {
    constructor() {
        this.missedHits = []
        this.board = []
        this.numberShipSunk = 0
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

    placeShip (shipObj, row, column, axis) {
        row = Number(row)
        column = Number(column)
        const ship = new Ship(shipObj.length)
        if (!this.isPlacementPossible(ship, row, column, axis)) return false
        for (let i = 0; i < ship.length; i++) {
            if (axis === "x") {
                this.board[row][column + i] = ship
            } else if (axis === "y") {
                this.board[row + i][column] = ship
            }
        } 
    }

    isPlacementPossible(ship, row, column, axis) {
        if (axis === "x") {
            if (column + ship.length > 10) return false
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row][column + i] instanceof Ship) {
                    return false
                }
            }
        } else if (axis === "y") {
            if (row + ship.length > 10) return false
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row + i][column] instanceof Ship) {
                    return false
                }
            }
        }
        return true
    }

    receiveAttack (row, column) {
        if (this.board[row][column]) {
            if (this.board[row][column] instanceof Ship) {
                this.board[row][column].hit()
                if (this.board[row][column].isSunk()) this.numberShipSunk++
                if (this.numberShipSunk === 5) return "Game Over"
            } else {
                this.missedHits.push([row, column])
            }
            this.board[row][column] = false
        } else {
            return "already attacked"
        }
    }
}
