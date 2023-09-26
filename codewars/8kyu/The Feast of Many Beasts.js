function feast(beast, dish) {
    let firstBeast = beast.charAt(0)
    let lastBeast = beast.charAt(beast.length - 1);
    let firstDish = dish.charAt(0)
    let lastDish = dish.charAt(dish.length - 1);
    return (firstBeast === firstDish && lastDish===lastBeast)
}
console.log(feast("great blue heron", "garlic naan"))// true
console.log(feast("chickadee", "chocolate cake"))// true
console.log(feast("brown bear", "bear claw"))// false