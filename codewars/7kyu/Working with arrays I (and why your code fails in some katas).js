function withoutLast(arr) {
    const arrCopy = [...arr]
    arrCopy.pop()
    return arrCopy
}

console.log(withoutLast([ 44, 43, 88, 29, 41, 49, 34, 13, 78, 41, 85 ])) //[ 44, 43, 88, 29, 41, 49, 34, 13, 78, 41 ]
