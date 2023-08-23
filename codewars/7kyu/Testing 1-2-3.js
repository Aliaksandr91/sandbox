var number=function(array){
    return array.map((el, i) => `${i+1}: ${el}`)
}
console.log(number([]))// []
console.log(number(["a", "b", "c"]))// ["1: a", "2: b", "3: c"]
