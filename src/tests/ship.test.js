import Ship from "../script/ship";

let ship;
beforeAll(() => ship = new Ship("ship", 3))

test("times hit", () => {
    ship.hit()
    expect(ship.timesHit).toEqual(1)
    ship.hit()
    expect(ship.timesHit).toEqual(2)
    ship.hit()
    expect(ship.timesHit).toEqual(3)
})

test("is Sunk", () => {
    expect(ship.isSunk()).toBeTruthy()
})