function iceBrickVolume(radius, bottleLength, rimLength) {
    return (2 * radius) ** 2 * (bottleLength - rimLength) * 0.5;
}

console.log(iceBrickVolume(1, 10, 2))// 16
console.log(iceBrickVolume(5, 30, 7))// 1150
console.log(iceBrickVolume(3, 10, 2)); // Should return 72
console.log(iceBrickVolume(1, 10, 2)); // Output: 16
