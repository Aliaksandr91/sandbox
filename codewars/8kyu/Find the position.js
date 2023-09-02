function position(letter){
    const alphabet = "_abcdefghijklmnopqrstuvwxyz".split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (letter === alphabet[i]) {
            return `Position of alphabet: ${i}`
        }
    }
}
console.log(position("a")) //"Position of alphabet: 1"
console.log(position("z")) //"Position of alphabet: 26"
console.log(position("e")) //"Position of alphabet: 5"