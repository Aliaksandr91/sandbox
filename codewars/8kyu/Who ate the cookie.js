function cookie(x) {

    let obj1 = "Who ate the last cookie? It was Zach!"
    let obj2 = "Who ate the last cookie? It was Monica!"
    let obj3 = "Who ate the last cookie? It was the dog!"
    let res = ''
    if (typeof x === 'string') {
        res = obj1
    } else if (typeof x === 'number') {
        res = obj2
    } else {
        res = obj3
    }
    return res
}

console.log(cookie("Ryan"))
console.log(cookie(26))
console.log(cookie(2.3))
console.log(cookie(true))
