function findOutlier(integers) {
    let oddArr = integers.filter(el => el % 2 !== 0)
    let evenArr = integers.filter(el => el % 2 === 0)
    return oddArr.length === 1 ? oddArr[0] : evenArr[0]
}

console.log(findOutlier([0, 1, 2]))  // 1
console.log(findOutlier([1, 2, 3]))  // 2
console.log(findOutlier([2, 6, 8, 10, 3]))  // 3
console.log(findOutlier([0, 0, 3, 0, 0]))  // 3
console.log(findOutlier([1, 1, 0, 1, 1]))  // 0
