function past(h, m, s) {
    return Math.floor(h * 3.6 * 10 ** 6 + m * 60000 + s * 1000)
}

console.log(past(0, 1, 1)) //61000
console.log(past(1, 1, 1)) //3661000
console.log(past(0, 0, 0)) //0
console.log(past(1, 0, 1)) //3601000
console.log(past(1, 0, 0)) //3600000
console.log(past(21, 14, 56)) //76496000