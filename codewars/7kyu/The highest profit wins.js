function minMax(arr) {
    let res = []
    let min = arr.sort((a, b) => a - b)[0]
    let max = arr[arr.length - 1]
    res.push(min)
    res.push(max)
    return res // fix me!
}

console.log(minMax([1, 2, 3, 4, 5])) // [1, 5]]
console.log(minMax([2334454, 5])) // [5, 2334454]]
console.log(minMax([5])) // [5, 5]]
//-----------------------------------------------------------
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }