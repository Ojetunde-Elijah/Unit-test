import { fizzBuzz, max } from "../src/intro";
import {describe, test, it, expect} from "vitest";
describe("max",()=>{
    it("should return the first argument if it is greater", ()=>{
        const a = 2;
        const b = 1;
        const result = max(a,b);

        expect(result).toBe(2);
    })
    it("should return the second argument if it is greater",()=>{
        const a = 1;
        const b = 2;
        const result2 = max(a,b);
        expect(result2).toBe(2)
    })
})
describe("fizzbuzz",()=>{
    it("should return FizzBuzz if arg is dvisible by 3 and 5", ()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
    it("should return fizz if arg is divisible by 3", ()=>{
        expect(fizzBuzz(9)).toBe("Fizz")
    })
    it("should return Buzz if arg is divisible by 5", ()=>{
        expect(fizzBuzz(10)).toBe("Buzz")
    })
    it("should return the arg if it is not divisible by 3 or 5 or both",()=>{
        expect(fizzBuzz(11)).toBe("11")
    })
})