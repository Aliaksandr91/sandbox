var isSquare = function(n){
    let sqrtNum = Math.sqrt(n)
    if (sqrtNum % 1 === 0) {
        return Math.sqrt(n) ** 2 === n
    } else {
        return false
    }
}
console.log(isSquare(-1)) //false
console.log(isSquare( 0)) //true
console.log(isSquare( 3)) //false
console.log(isSquare( 4)) //true
console.log(isSquare(25)) //true
console.log(isSquare(26)) //false
console.log(isSquare(30)) //false