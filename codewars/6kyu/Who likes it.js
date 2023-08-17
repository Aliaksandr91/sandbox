function likes(names) {
    let res =''
    if (names.length  === 0) {
        res = 'no one likes this'
    } else if (names.length === 1) {
        res = `${names[0]} likes this`
    } else if (names.length === 2) {
        res = `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        res = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        res = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    return res
}
console.log(likes([]))  // 'no one likes this'
console.log(likes(['Peter']))  // 'Peter likes this'
console.log(likes(['Jacob', 'Alex']))  // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']))  // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))  // 'Alex, Jacob and 2 others like this'

