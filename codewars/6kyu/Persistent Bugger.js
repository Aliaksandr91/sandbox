function persistence(num) {
    num = num.toString()
    let count = 0
    while (num.length > 1) {
        num = num.split('').reduce((product, digit) => product * parseInt(digit), 1).toString();
        count++
    }
    return count
}

console.log(persistence(39)) //3
console.log(persistence(4)) //0
console.log(persistence(25)) //2
console.log(persistence(999)) //4

