import Player from "../script/player";

test("player can attack enemy gameboard", () => {
    const player1 = new Player()
    const player2 = new Player()
    player1.sendAttack(0, 0, player2.gameboard)
    expect(player2.gameboard.board[0][0]).toBeFalsy
    expect(player2.gameboard.missedHits).toEqual([[0,0]])
})