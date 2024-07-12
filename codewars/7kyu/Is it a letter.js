function isItLetter(character) {
    return character.match(/^[a-zA-Z]$/) !== null
}

console.log(isItLetter('a'))// true
console.log(isItLetter('1'))// false
