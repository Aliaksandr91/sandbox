function remove(s, n) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        s = s.replace('!', '');
        count++
        if (count === s.length || count === n) {
            return s
        }
    }
    return s
}

console.log(remove("Hi!", 1))//  "Hi"
console.log(remove("Hi!", 100))//  "Hi"
console.log(remove("Hi!!!", 1))//  "Hi!!"
console.log(remove("Hi!!!", 100))//  "Hi"
console.log(remove("!Hi", 1))//  "Hi"
console.log(remove("!Hi!", 1))//  "Hi!"
console.log(remove("!Hi!", 100))//  "Hi"
console.log(remove("!!!Hi !!hi!!! !hi", 1))//  "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 3))//  "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 5))//  "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 100))//  "Hi hi hi"