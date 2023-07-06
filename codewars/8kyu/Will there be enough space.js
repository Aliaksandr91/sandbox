function enough(cap, on, wait) {
    let res = on + wait - cap
    return res <= 0 ? 0 : res
}
console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))
