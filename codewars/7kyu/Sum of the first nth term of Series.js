function SeriesSum(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        let term = 1 / (1 + 3 * i)
        sum+=term
    }
    return sum.toFixed(2)
}

console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(0)) // "0.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(3)) // "1.39"
console.log(SeriesSum(4)) // "1.49"