function isDivisible(n, x, y) {
    let tempX = n / x;
    let tempY = n / y;
    return (tempX % 1 === 0 && tempY% 1 === 0)
}

console.log(isDivisible(3, 3, 4))//false
console.log(isDivisible(12, 3, 4))//true
console.log(isDivisible(8, 3, 4))//false
console.log(isDivisible(48, 3, 4))//true