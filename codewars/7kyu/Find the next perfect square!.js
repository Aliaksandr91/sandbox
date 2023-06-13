function findNextSquare(sq) {
    let sqrt = 0;
    let result = -1;
    if (Number.isInteger(Math.sqrt(sq))) {
        sqrt = Math.sqrt(sq);
        result = Math.pow((sqrt+1), 2)
    }
    return result;
}
console.log(findNextSquare(625))