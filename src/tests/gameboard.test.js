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
    newBoard.receiveAttack([1,1])
    expect(cruiser.timesHit).toEqual(1)
    expect(newBoard.board[1][1]).toBeFalsy
    expect(newBoard.receiveAttack([1,1])).toEqual("already attacked")
    newBoard.receiveAttack([3,1])
    expect(newBoard.missedHits).toEqual([[3,1]])
    expect(newBoard.receiveAttack([3,1])).toEqual("already attacked")
    
})