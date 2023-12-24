function swapValues(arr) {
    if (arr.length === 2) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    } else {
        console.log("Failed swapping numbers");
    }
}