function digPow(n, p) {
    let k = -1;
    let arr = n.toString().split('');
    let sum = 0;
    arr.map((item, index) => {
        let pow = Math.pow(Number(item), (p + index))
        sum = sum + pow;
    })

    if (sum % n === 0) {
        return sum / n
    } else {
        return k;
    }
}
