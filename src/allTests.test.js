const capitalize = require("./capitalize")
const reverseString = require("./reverseString")
const calculator = require("./calculator")
const caesarCipher = require("./caesarCipher")
const analyzeArray = require("./analyzeArray")

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

describe("Testing the calculator function", () => {
  test("Add function", () => {
    expect(calculator.add(2,2)).toBe(4)
  })

  test("Subtract function", () => {
    expect(calculator.subtract(2,2)).toBe(0)
  })

  test("Multiply function", () => {
    expect(calculator.multiply(2,2)).toBe(4)
  })

  test("Divide function", () => {
    expect(calculator.divide(2,2)).toBe(1)
  })

  test("Divide function with divider being zero", () => {
    expect(calculator.divide(2,0)).toBe(undefined)
  })
})

describe("Testing the caesarCipher function", () => {
  test("Test wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
  })

  test("Test case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
  })

  test("Test punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
  })
})

describe("Testing analyzeArray function", () => {
  const data1 = [1,8,3,4,2,6]
  test("Normal array with numbers", () => {
    expect(analyzeArray(data1)).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })

  const data2 = []
  test("Array length 0", () => {
    expect(analyzeArray(data2)).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0
    })
  })


})

