const capitalize = require("./capitalize")
const reverseString = require("./reverseString")

describe("Testing the capitalize function", () => {
  test("First letter not uppercase", () => {
    expect(capitalize("test")).toBe("Test")
  })

  test("First letter uppercase", () => {
    expect(capitalize("Test")).toBe("Test")
  })

  test("Empty input", () => {
    expect(capitalize("")).toBe("")
  })
})

describe("Testing the reverseString function", () => {
  test("Regular input", () => {
    expect(reverseString("A man, a plan, a canal -- Panama")).toBe("amanaP -- lanac a ,nalp a ,nam A")
  })

  test("Regular input", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH")
  })

  test("Empty input", () => {
    expect(reverseString("")).toBe("")
  })
})

