function XO(str) {
    let countO = 0;
    let countX = 0;
    str.split('').map((word) => {
        if (word.toLowerCase() === 'o') {
            countO = countO +1
        }
        if (word.toLowerCase() === 'x') {
            countX = countX +1
        }
    })
    return countX===countO
}
console.log(XO('xo'))//true
console.log(XO("xxOo"))//true
console.log(XO("xxxm"))//false
console.log(XO("Oo"))//false
console.log(XO("ooom"))//false