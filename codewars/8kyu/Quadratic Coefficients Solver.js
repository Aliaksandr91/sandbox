function quadratic(x1, x2) {
    let a = 1;
    let b = -(x1 + x2);
    let c = x1 * x2;
    return [a,b,c]
}

console.log(quadratic(0, 1))  // [1, -1,   0]
console.log(quadratic(1, 1))  // [1, -2,   1]
console.log(quadratic(-4, -9))  // [1, 13,  36]
console.log(quadratic(-5, -4))  // [1,  9,  20]
console.log(quadratic(4, -9))  // [1,  5, -36]
console.log(quadratic(5, -4))  // [1, -1, -20]
