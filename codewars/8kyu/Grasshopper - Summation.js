var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum+=i
    }
    return sum
}
console.log(summation(1))
console.log(summation(3))
console.log(summation(8))