

describe("Number Operation",()=>{
    test("1 plus 1 should be qual to 2",()=>{
        let a =1 ;
        let b = 1;
        expect( a + b).toBe(2);
    })
    test("5 plus 6 is not equal to 10",()=>{
        let a  = 5;
        let b = 6;
        expect(a + b).not.toBe(10);
    })
})
describe("Testing other matchers",()=>{
    test("Testing that a variable is undefined",()=>{
        let number = undefined;
        expect(number).not.toBeDefined()
        expect(number).toBeUndefined()
        expect(number).not.toBeNull()
        expect(number).toBeFalsy()
        expect(number).not.toBeTruthy()
    })

    it("should expect zero to act like zero",()=>{
        let number = 0;
        expect(number).toBeDefined()
        expect(number).not.toBeUndefined()
        expect(number).not.toBeNull()
        expect(number).toBeFalsy()
        expect(number).not.toBeTruthy()
    })

    it("should test number comparison",()=>{
        const a = 1;
        const b = 2;
        expect(a + b).toBeGreaterThan(2);
        expect(b).toBeGreaterThan(a);
        expect(a + b).toBeGreaterThanOrEqual(3);
        expect(a + b).toBeLessThanOrEqual(5);
        expect(a + b).toBeLessThan(10);
    })

    it("should test that there should be i in team",()=>{
        let string = "teami";

        expect(string).toMatch(/I/i);
    })

    it("should test that there is a stop in christopher",()=>{
        let string = "christopher";

        expect(string).toMatch(/stop/)
    })

    const shoppingList = ["Milk","Trash bags", "Paper towels", "Iphones"]
    it("should test arrays",()=>{
        expect(shoppingList).not.toContain("PS4");
        expect(shoppingList).toContain("Milk");

    })
})

describe("Testing Reference equality",()=>{
    const user = {
        name: "Clement",
    }
    user["age"] = 45;

    const A68 = ["David","Vincent", "Elijah","Nifemi"];

    it("should return a user object with age as 45",()=>{
        expect(user).toEqual({
            name: "Clement",
            age: 45
        })
    })
    it("should test an array of A68 occupants",()=>{
        expect(A68).toEqual(
            ["David","Vincent","Elijah","Nifemi"]
        )
    })
    it("should test an object",()=>{
        expect(user).toEqual(
        expect.objectContaining({
            name: expect.any(String),
            age: expect.any(Number)
        })
    )
    })

    it("should test array equality",()=>{
        const names = ["Clement","Sarah","July"]
        names.push("Jacob");

        expect(names).toEqual(["Clement","Sarah","July","Jacob"])
        expect(names).toEqual(expect.arrayContaining(["Jacob"]))
        expect(names).toEqual(expect.arrayContaining([expect.any(String)]))
    })
})