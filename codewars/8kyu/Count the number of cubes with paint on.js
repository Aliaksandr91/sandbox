function countSquares(cuts){
    if (cuts === 0) {
        return 1;
    }
    return  8 + 12 * (cuts - 1) + 6 * (cuts - 1) ** 2;
}
