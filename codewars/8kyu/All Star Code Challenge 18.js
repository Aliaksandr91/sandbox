function strCount(str, letter) {
    let count = 0
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            count = count + 1
        }
    }
    return count
}

console.log(strCount('Hello', 'o'))//1
console.log(strCount('Hello', 'l'))//2
console.log(strCount('', 'z')) //0