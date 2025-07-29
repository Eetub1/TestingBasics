function reverseString(string) {
    if (string.length < 1) return string
    return string.split("").reverse().join("")
}

module.exports = reverseString