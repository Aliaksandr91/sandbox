function divisors(integer) {
    let res = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            res.push(i)
        }
    }
    return res.length > 0 ? res :`${integer} is prime`
}

console.log(divisors(15)) // [3, 5]);
console.log(divisors(12)) // [2, 3, 4, 6]);
console.log(divisors(13)) // "13 is prime");