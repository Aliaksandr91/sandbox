function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let positiveArr = input.filter(el => el > 0)
    let negativeArr = input.filter(el => el < 0)
    return [positiveArr.length, negativeArr.reduce((acc, el) => acc + el, 0)]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]
//console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[8, -50]
