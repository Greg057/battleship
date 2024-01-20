export default class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length 
        this.timesHit = 0
    }

    hit () {
        this.timesHit++
    }

    isSunk () {
        return this.timesHit === this.length
    }
}

function createShip () {
    const carrier = new Ship("Carrier", 5)
    const battleship = new Ship("Battleship", 4)
    const destroyer = new Ship("Destroyer", 3)
    const submarine = new Ship("Submarine", 3)
    const cruiser = new Ship("Cruiser", 2)

    const ships = {carrier, battleship, destroyer, submarine, cruiser}
    return ships
}
    
