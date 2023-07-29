function squareDigits(num){
    let arr = num.toString().split('').map(el =>  el**2)
    return Number(arr.join(''))
}

console.log(squareDigits(3212))//9414
console.log(squareDigits(2112))//4114
console.log(squareDigits(0))//0