function volume(r, h) {
    return Math.floor(1 / 3 * Math.PI * r ** 2 * h)
}

console.log(volume(7, 3))// 153
console.log(volume(56, 30))// 98520
console.log(volume(0, 10))// 0