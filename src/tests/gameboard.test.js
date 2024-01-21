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
    const cruiser = new Ship(3)
    newBoard.placeShip(cruiser, 1, 1, "x")
    /* expect(newBoard.board).toEqual([[[], [], [], [], [], [], [], [], [], []], 
                                    [[], {"length": 3, "timesHit": 0}, ["Cruiser"], ["Cruiser"], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []]]) */
    newBoard.receiveAttack(1, 1)
    expect(cruiser.timesHit).toEqual(1)
    expect(newBoard.board[1][1]).toBeFalsy
    expect(newBoard.receiveAttack(1, 1)).toEqual("already attacked")
    newBoard.receiveAttack(3, 1)
    expect(newBoard.missedHits).toEqual([[3,1]])
    expect(newBoard.receiveAttack(3,1)).toEqual("already attacked")
})

test("placement works", () => {
    const cruiser = new Ship(3)
    expect(newBoard.placeShip(cruiser, 1, 8, "x")).toBe("Placement not possible here")
    expect(newBoard.placeShip(cruiser, 1, 9, "x")).toBe("Placement not possible here")
    expect(newBoard.placeShip(cruiser, 1, 7, "x")).toBe()
    const destroyer = new Ship(4)
    expect(newBoard.placeShip(destroyer, 9, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 8, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 7, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 6, 0, "y")).toBe()
    const carrier = new Ship(4)
    expect(newBoard.placeShip(destroyer, 3, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 4, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 5, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 6, 0, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(destroyer, 2, 0, "y")).toBe()
    const boat = new Ship(2)
    expect(newBoard.placeShip(boat, 0, 8, "x")).toBe()
    expect(newBoard.placeShip(boat, 0, 9, "x")).toBe("Placement not possible here")
    expect(newBoard.placeShip(boat, 0, 9, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(boat, 0, 8, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(boat, 0, 7, "y")).toBe("Placement not possible here")
    expect(newBoard.placeShip(boat, 0, 6, "y")).toBe()
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