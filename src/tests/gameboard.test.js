import Gameboard from "../script/gameboard";
import Ship from "../script/ship";

test("correctly create gameboard 10x10", () => {
    const newBoard = new Gameboard()
    expect(newBoard.board).toEqual([[[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []], 
                                    [[], [], [], [], [], [], [], [], [], []]])
    const cruiser = new Ship(3)
    newBoard.placeShip(cruiser, [1, 1])
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
    expect(newBoard.receiveAttack([1,1])).toEqual(1)
    expect(newBoard.receiveAttack([1,2])).toEqual(2)
    expect(newBoard.receiveAttack([1,3])).toEqual(3)
    const destroyer = new Ship(3)
    newBoard.placeShip(destroyer, [2, 4])
    expect(newBoard.receiveAttack([2,4])).toEqual(1)
    expect(newBoard.receiveAttack([2,5])).toEqual(2)
    expect(newBoard.receiveAttack([2,6])).toEqual(3) 
    expect(newBoard.receiveAttack([2,7])).toEqual(["missed"])
    
})