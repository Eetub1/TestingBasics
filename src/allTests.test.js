const capitalize = require("./capitalize")

describe("Testing the capitalize function", () => {
  test("Test if first letter isnt uppercase", () => {
    expect(capitalize("test")).toBe("Test")
  })

  test("Test if first letter is uppercase", () => {
    expect(capitalize("Test")).toBe("Test")
  })

  test("Empty input", () => {
    expect(capitalize("")).toBe("")
  })
})

