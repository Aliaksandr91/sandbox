function noBoringZeros(n) {
    let str = ''
    str = n.toString();
    for (let i = str.length - 1; i > 0; i--) {
        console.log(str[i])
        if (str[i] !== '0') {
            break
        }
        if (str[i] === '0') {
            str = str.slice(0, -1)
        }
    }
    return +str;
}
console.log(noBoringZeros(150500))