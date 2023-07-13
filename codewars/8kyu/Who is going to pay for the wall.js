function whoIsPaying(name){
    let res = [];
    if (name.length <= 2) {
        res.push(name)
    } else {
        res.push(name)
        res.push(name.slice(0,2))
    }
    return res
}

console.log(whoIsPaying("Mexico"))
console.log(whoIsPaying("Melania"))
console.log(whoIsPaying("Melissa"))