function warnTheSheep(queue) {
    let arr = queue.reverse()
    let index = arr.findIndex((el) => el === 'wolf')
    return index === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))//"Oi! Sheep number 2! You are about to be eaten by a wolf!"

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))//"Oi! Sheep number 5! You are about to be eaten by a wolf!"

console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))//"Oi! Sheep number 6! You are about to be eaten by a wolf!"

console.log(warnTheSheep(["sheep", "wolf", "sheep"]))//"Oi! Sheep number 1! You are about to be eaten by a wolf!"

console.log(warnTheSheep(["wolf"]))//"Pls go away and stop eating my sheep"

console.log(warnTheSheep(["sheep", "sheep", "wolf"]))//"Pls go away and stop eating my sheep"