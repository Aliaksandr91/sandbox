function positiveSum(arr) {
    let sum = 0
    for (const arrElement of arr) {
        if(arrElement > 0) {
            sum+=arrElement
        }
    }
    return sum
}

console.log(positiveSum([1,-2,3,4,5]))