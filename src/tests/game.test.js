import { arrIncludesArr } from "../script/game";
import { changeColumn } from "../script/game";
import { changeRow } from "../script/game";

test("arrIncludesArr", () => {
    const arr1 = [[1,2], [0,5], [9,4]]
    const arr2 = [0,5]
    expect(arrIncludesArr(arr1, arr2)).toBe(true)
    expect(arrIncludesArr(arr1, [9,4])).toBe(true)
    expect(arrIncludesArr(arr1, [8 + 1,4])).toBe(true)
    expect(arrIncludesArr(arr1, [1,3])).toBe(false)
})

test("changeColumn", () => {
    function fun(row, column) {
        return { row, column }
    }
    let value = fun(1,2).row
    
    expect(value).toBe(2)
})

test("changeRow", () => {
    
})