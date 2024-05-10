function lottery(str) {
    let uniqueIntegers = new Set();
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(+arr[i])) {
            uniqueIntegers.add(arr[i]);
        }
    }
    let res = Array.from(uniqueIntegers).join('');
    if (res.length === 0) {
        return "One more run!";
    }
    return res
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG")) // "805"
console.log(lottery("ffaQtaRFKeGIIBIcSJtg")) //"One more run!"
