function getNumberFromString(s) {
    return +s.replace(/[^0-9]/g,"")
}
console.log(getNumberFromString("1"))// 1
console.log(getNumberFromString("123"))// 123
console.log(getNumberFromString("this is number: 7"))// 7
