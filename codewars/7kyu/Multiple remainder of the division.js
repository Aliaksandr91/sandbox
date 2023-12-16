function isMultiple(a, b, n) {
    let result = Math.round((a / b) * 10)
    let fractionalPart = result % 10
    return fractionalPart > 0 && fractionalPart % n === 0
}

console.log(isMultiple(5, 2, 3))// false
console.log(isMultiple(5, 3, 4))// false
console.log(isMultiple(5, 4, 3))// true
console.log(isMultiple(666, 665, 2))// false
console.log(isMultiple(3691401, 1892272, 5))// false
console.log(isMultiple(7589220, 9082578, 2))// true