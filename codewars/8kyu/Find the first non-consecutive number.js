function firstNonConsecutive(arr) {
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === temp + 1) {
            temp = arr[i]
        } else {
            return arr[i]
        }
    }
    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])) //6
console.log(firstNonConsecutive([1, 2, 3, 4]))//null