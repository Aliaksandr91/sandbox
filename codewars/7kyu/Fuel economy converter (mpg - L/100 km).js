function mpg2lp100km(x) {
    return +(100 * 3.785411784 / (x * 1.609344)).toFixed(2)
}

function lp100km2mpg(x) {
    return +(100 * 3.785411784 / (x * 1.609344)).toFixed(2)
}

console.log(mpg2lp100km(42))// 5.6
console.log(lp100km2mpg(9))// 26.13