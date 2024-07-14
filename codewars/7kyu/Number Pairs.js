function getLargerNumbers(a, b) {
    let res = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= b[i]) {
            res.push(a[i])
        } else {
            res.push(b[i])
        }
    }
    return res
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])) // [23, 64, 53, 17, 88]
console.log(getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80])) // [34, 14, 53, 17, 88]
