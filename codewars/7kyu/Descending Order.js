function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
}

console.log(descendingOrder(123456789))//987654321
console.log(descendingOrder(1021))//2110