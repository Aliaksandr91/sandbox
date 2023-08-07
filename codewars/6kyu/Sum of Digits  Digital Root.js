function digitalRoot(n) {
    while (n >= 10) {
        const numArr = n.toString().split('').map(Number);
        n = numArr.reduce((acc, num) => acc + num, 0);
    }
    return n;
}

console.log(digitalRoot(16)) // 7
console.log(digitalRoot(456)) // 6