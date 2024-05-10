function isTuringEquation(s) {
    let arr = s.split(/[+=]/)
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split('').reverse().join(''))
    }
    return Number(res[0]) + Number(res[1]) === Number(res[2])
}

console.log(isTuringEquation("73+42=16"))//true
console.log(isTuringEquation("5+8=13"))//false
console.log(isTuringEquation("10+20=30"))//true
console.log(isTuringEquation("0001000+000200=00030"))//true
console.log(isTuringEquation("1234+5=1239"))//false
console.log(isTuringEquation("1+0=0"))//false
console.log(isTuringEquation("7000+8000=51"))//true
console.log(isTuringEquation("0+0=0"))//true
