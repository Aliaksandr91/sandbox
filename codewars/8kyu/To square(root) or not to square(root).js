function squareOrSquareRoot(array) {
    return array.map((el) => {
        return Math.sqrt(el) % 1 === 0 ? Math.sqrt(el) : Math.pow(el, 2)
    })
}

console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]))