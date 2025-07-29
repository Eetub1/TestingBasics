function analyzeArray(array) {
    const obj = {
        min: array.length > 0? Math.min(...array) : null,
        max: array.length > 0? Math.max(...array) : null,
        length: array.length,
        average: array.length > 0? array.reduce((a, b) => a += b , 0) / array.length : null
    }
    return obj
}

const arr = [1,8,3,4,2,6]
console.log(analyzeArray(arr))

module.exports = analyzeArray