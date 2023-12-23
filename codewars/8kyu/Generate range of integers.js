function generateRange(min, max, step){
    let res = []
    for (let i = min; i <= max; i+=step) {
        res.push(i)
    }
    return res
}
console.log(generateRange(2, 10, 2))// [2,4,6,8,10]
console.log(generateRange(1, 15, 20))// [1]
console.log(generateRange(-10, 1, 1))// [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
