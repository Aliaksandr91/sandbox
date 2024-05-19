function sameCase(a, b) {
    const isLetter = char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
    if (!isLetter(a) || !isLetter(b)) return -1;
    if ((a >= 'a' && a <= 'z' && b >= 'a' && b <= 'z') || (a >= 'A' && a <= 'Z' && b >= 'A' && b <= 'Z')) {
        return 1;
    }
    return 0;
}
console.log(sameCase('C', 'B')) // 1
console.log(sameCase('b', 'a')) // 1
console.log(sameCase('d', 'd')) // 1
console.log(sameCase('A', 's')) // 0
console.log(sameCase('c', 'B')) // 0
console.log(sameCase('b', 'Z')) // 0
console.log(sameCase('\t', 'Z')) // -1
console.log(sameCase('H', ':')) // -1
console.log(sameCase('b', ',')) // -1
