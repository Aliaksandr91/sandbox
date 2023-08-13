function oddOrEven(array) {
    const sum = array.reduce((acc, el) => {
        acc = acc + el
        return acc
    }, 0)
    return sum % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0])) // 'even'
console.log(oddOrEven([1])) // 'odd'
console.log(oddOrEven([])) // 'even'

console.log(oddOrEven([0, 1, 5])) // 'even'
console.log(oddOrEven([0, 1, 3])) // 'even'
console.log(oddOrEven([1023, 1, 2])) // 'even'

console.log(oddOrEven([0, -1, -5])) // 'even'
console.log(oddOrEven([0, -1, -3])) // 'even'
console.log(oddOrEven([-1023, 1, -2])) // 'even'


console.log(oddOrEven([0, 1, 2])) // 'odd'
console.log(oddOrEven([0, 1, 4])) // 'odd'
console.log(oddOrEven([1023, 1, 3])) // 'odd'


console.log(oddOrEven([0, -1, 2])) // 'odd'
console.log(oddOrEven([0, 1, -4])) // 'odd'
console.log(oddOrEven([-1023, -1, 3])) // 'odd'