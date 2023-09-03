function getAverage(marks) {
    return Math.floor(marks.reduce((acc, el) => acc + el / marks.length, 0))
}

console.log(getAverage([2, 2, 2, 2])) //2
console.log(getAverage([1, 2, 3, 4, 5,])) //3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])) //1
console.log(getAverage([1, 5, 87, 45, 8, 8])) //25