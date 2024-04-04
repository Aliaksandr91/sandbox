function powersOfTwo(n){
    let res = []
    // if (n === 0) {
    //     res = [0]
    // }
    for (let i = 0; i <= n; i++) {
        res.push(2**i)
    }
    return res
}
console.log(powersOfTwo(0)) // [1]
console.log(powersOfTwo(1)) // [1, 2]
console.log(powersOfTwo(4)) // [1, 2, 4, 8, 16]
