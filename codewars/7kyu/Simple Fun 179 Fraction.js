function fraction(a, b) {
    let gcd = 1;
    for (let i = 1; i <= a; ++i) {
        if (a % i === 0 && b % i === 0) {
            gcd = i
        }
    }
    return a / gcd + b / gcd

}

console.log(fraction(90, 120)) // 7

console.log(fraction(2, 4)) // 3

console.log(fraction(100, 1000)) // 11

console.log(fraction(3, 15)) // 6

console.log(fraction(114, 200)) // 157

console.log(fraction(3, 118)) // 121
