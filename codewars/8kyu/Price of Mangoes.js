function mango(quantity, price){
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
}

console.log(mango(3, 3)) // 6
console.log(mango(9, 5)) // 30
console.log(mango(5, 3)) // 12
console.log(mango(85, 78)) // 4446