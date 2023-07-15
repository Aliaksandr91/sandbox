function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total = 0;
    for (let i = 0; i < classPoints.length; i++ ) {
        total +=classPoints[i]
    }
    total+=yourPoints
    return total/(classPoints.length + 1) < yourPoints
}

console.log(betterThanAverage([2, 3], 5))