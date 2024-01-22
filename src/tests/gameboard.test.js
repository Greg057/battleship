import Gameboard from "../script/gameboard";
import Ship from "../script/ship";

let newBoard
beforeEach(() => {
    newBoard = new Gameboard()
})

test("correctly create gameboard 10x10", () => {
    expect(newBoard.board).toEqual([[[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], 
                                    [[true], [true], [true], [true], [true], [true], [true], [true], [true], [true]], ])
})

test("placement works", () => {
    const cruiser = new Ship(3)
    expect(newBoard.placeShip({length: 3}, 1, 8, "x")).toBe(false)
    expect(newBoard.placeShip({length: 3}, 1, 9, "x")).toBe(false)
    expect(newBoard.placeShip({length: 3}, 1, 7, "x")).toBe()
    expect(newBoard.placeShip({length: 4}, 9, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 8, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 7, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 6, 0, "y")).toBe()
    expect(newBoard.placeShip({length: 4}, 3, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 4, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 5, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 6, 0, "y")).toBe(false)
    expect(newBoard.placeShip({length: 4}, 2, 0, "y")).toBe()
    expect(newBoard.placeShip({length: 2}, 0, 8, "x")).toBe()
    expect(newBoard.placeShip({length: 2}, 0, 9, "x")).toBe(false)
    expect(newBoard.placeShip({length: 2}, 0, 9, "y")).toBe(false)
    expect(newBoard.placeShip({length: 2}, 0, 8, "y")).toBe(false)
    expect(newBoard.placeShip({length: 2}, 0, 7, "y")).toBe(false)
    expect(newBoard.placeShip({length: 2}, 0, 6, "y")).toBe()
})

test("Game over shows correctly", () => {
    const carrier = new Ship(5)
    const battleship = new Ship(4)
    const destroyer = new Ship(3)
    const submarine = new Ship(3)
    const cruiser = new Ship(2)
    newBoard.placeShip(carrier, 0, 0, "x")
    newBoard.placeShip(battleship, 1, 0, "x")
    newBoard.placeShip(destroyer, 2, 0, "x")
    newBoard.placeShip(submarine, 3, 0, "x")
    newBoard.placeShip(cruiser, 4, 0, "x")
    newBoard.receiveAttack(4,0)
    newBoard.receiveAttack(4,1)
    expect(newBoard.numberShipSunk).toBe(1)
    newBoard.receiveAttack(3,0)
    newBoard.receiveAttack(3,1)
    newBoard.receiveAttack(3,2)
    expect(newBoard.numberShipSunk).toBe(2)
    newBoard.receiveAttack(2,0)
    newBoard.receiveAttack(2,1)
    newBoard.receiveAttack(2,2)
    expect(newBoard.numberShipSunk).toBe(3)
    newBoard.receiveAttack(1,0)
    newBoard.receiveAttack(1,1)
    newBoard.receiveAttack(1,2)
    newBoard.receiveAttack(1,3)
    expect(newBoard.numberShipSunk).toBe(4)
    newBoard.receiveAttack(0,0)
    newBoard.receiveAttack(0,1)
    newBoard.receiveAttack(0,2)
    newBoard.receiveAttack(0,3)
    expect(newBoard.receiveAttack(0,4)).toBe("Game Over")
    expect(newBoard.numberShipSunk).toBe(5)
})