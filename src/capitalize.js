function capitalize(string) {
    if (string.length < 1) return string
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalized
}

module.exports = capitalize