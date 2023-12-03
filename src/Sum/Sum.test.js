import { sum } from "./Sum"

test("should return the sum of two number", ()=>{
    const result = sum(3,4);

    //Assertion
    expect(result).toBe(7)
})
test("should return the two string concated", ()=>{
    const result = sum("3","4");

    //Assertion
    expect(result).toBe("34")
})