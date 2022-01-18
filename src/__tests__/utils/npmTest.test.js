import { countDown } from "../../utils/npmTest";

describe("creat test for reverse count function", () => {
     it("reverse count of this number", () => {
         expect(countDown(3)).toBe(3, 2, 1)
     })
    it("corner-test: enter number.lenght(4), in to be length number(3)", () => {
        expect(countDown(4)).toBe(3, 2, 1)
    })
    it("enter number.lenght(4)", () => {
        expect(countDown(4)).toBe(4, 3, 2, 1)
    })
})

describe("ckeckof that users enter number or txt", () => {
    it("users enter typeOf number", () => {
        expect(Number).toBe(Number)
    })
})
