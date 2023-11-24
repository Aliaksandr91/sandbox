function flickSwitch(arr) {
    let res = []
    let status = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            status = !status
        }
        res.push(status)
    }
    return res
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"])) // [true, false, false, false]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"])) // [false, false, false, false]
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"])) // [true, true, false, false, true]
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"])) // [false, true, false, true, false]
console.log(flickSwitch(["bicycle"])) // [true]
console.log(flickSwitch(["flick"])) // [false]
console.log(flickSwitch([])) // []