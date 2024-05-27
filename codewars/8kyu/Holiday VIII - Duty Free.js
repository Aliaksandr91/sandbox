function dutyFree(normPrice, discount, hol) {
    let discountPriceBottle = normPrice - (normPrice * discount / 100)
    let diff = normPrice - discountPriceBottle
    return Math.floor(hol/diff)
}

console.log(dutyFree(12, 50, 1000)) // 166
console.log(dutyFree(17, 10, 500)) // 294
console.log(dutyFree(24, 35, 3000)) // 357
