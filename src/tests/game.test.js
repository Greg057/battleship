import { arrIncludesArr } from "../script/game";

test("works", () => {
    const arr1 = [[1,2], [0,5], [9,4]]
    const arr2 = [0,5]
    expect(arrIncludesArr(arr1, arr2)).toBeTruthy
    expect(arrIncludesArr(arr1, [9,4])).toBeTruthy
    expect(arrIncludesArr(arr1, [8 + 1,4])).toBeTruthy
    expect(arrIncludesArr(arr1, [1,3])).toBeFalsy
})