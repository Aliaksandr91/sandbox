function sumArray(array) {
    let res = 0;
    if (Array.isArray(array) && array.length > 2) {
        let sortedArr = array.sort((a, b) => a - b)
        for (let i = 1; i < sortedArr.length - 1; i++) {
            res = res + sortedArr[i]
        }
        return res
    }
    return 0
}

console.log(sumArray(null)) // 0
console.log(sumArray([])) // 0
console.log(sumArray([3])) //  0
console.log(sumArray([3, 5])) // 0
console.log(sumArray([6, 2, 1, 8, 10])) // 16
console.log(sumArray([0, 1, 6, 10, 10])) //  17
console.log(sumArray([-6, -20, -1, -10, -12])) // -28
console.log(sumArray([-6, 20, -1, 10, -12])) // 3
