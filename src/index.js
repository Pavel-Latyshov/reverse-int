module.exports = function reverse (n) {
    let str = Math.abs(n)
    str = String(str)
    let rev = str
    .split('')
    .reverse()
    .join('')
    return rev
}
