function multiply(number) {
    let temp = number.toString().length
    return number > 0 ? 5 ** temp * number : 5 ** (temp - 1) * number
}

console.log(multiply(10)) //250
console.log(multiply(5)) //25
console.log(multiply(200)) //25000
console.log(multiply(0)) //0
console.log(multiply(-2)) //-10
