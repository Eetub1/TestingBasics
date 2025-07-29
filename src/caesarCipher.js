function caesarCipher(text, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const len = alphabet.length
    shift = shift % len

    const chars = text.split("")
    for (let i = 0; i < chars.length; i++) {
        if (!isLetter(chars[i])) continue
        if (chars[i] === chars[i].toUpperCase()) {
            const charIndex = alphabetUpper.indexOf(chars[i])
            chars[i] = alphabetUpper[(charIndex + shift) % len]
        } else {
            const charIndex = alphabet.indexOf(chars[i])
           chars[i] = alphabet[(charIndex + shift) % len] 
        }
    }
    return chars.join("")
}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char)
}

module.exports = caesarCipher