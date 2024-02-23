function isAllPossibilities(x) {
    const n = x.length;
    for (let i = 0; i < n; i++) {
        if (!x.includes(i)) {
            return false;
        }
    }
    return new Set(x).size === n;
}
console.log(isAllPossibilities([0,1,2,3])) //true
console.log(isAllPossibilities([1,2,3,4])) //false
