import { Sum } from "../Sum"

test("sum of test", ()=>{

    const result = Sum(4,6)

    expect(result).toBe(10);
})