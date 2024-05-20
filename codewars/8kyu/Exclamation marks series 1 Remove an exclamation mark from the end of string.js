function remove (string) {
    if (string[string.length - 1] === '!') {
        return string.slice(0, -1)
    } else {
        return string
    }
}
console.log(remove("Hi!", "Hi"));
console.log(remove("Hi!!!", "Hi!!"));
console.log(remove("!Hi", "!Hi"));
console.log(remove("!Hi!", "!Hi"));
console.log(remove("Hi! Hi!", "Hi! Hi"));
console.log(remove("Hi", "Hi"));
