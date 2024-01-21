import Gameboard from "../script/gameboard";
import Ship from "../script/ship";

test("correctly create gameboard 10x10", () => {
    const newBoard = new Gameboard()
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
    const newBoard = new Gameboard()
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