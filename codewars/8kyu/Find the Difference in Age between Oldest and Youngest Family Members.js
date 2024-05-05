function differenceInAges(ages){
    let min = Math.min(...ages)
    let max = Math.max(...ages)
    return [min, max, max-min]
}
console.log(differenceInAges([82, 15, 6, 38, 35]))// [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32]))// [14, 99, 85]
