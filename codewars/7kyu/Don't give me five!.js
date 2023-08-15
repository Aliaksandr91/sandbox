function dontGiveMeFive(start, end) {
    let res = []
    for (let i = start; i <= end; i++) {
        res.push(i)
    }
    return res.filter(el => !String(el).includes('5')).length
}

console.log(dontGiveMeFive(1, 9)) // 8
console.log(dontGiveMeFive(4, 17)) // 12