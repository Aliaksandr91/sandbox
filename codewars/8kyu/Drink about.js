function peopleWithAgeDrink(old) {

    if (old >= 21) {
        return "drink whisky"
    }
    if (old >= 18) {
        return "drink beer"
    }
    if (old >= 14) {
        return "drink coke"
    }
    return "drink toddy"

}

console.log(peopleWithAgeDrink(22))
console.log(peopleWithAgeDrink(13))
console.log(peopleWithAgeDrink(18))