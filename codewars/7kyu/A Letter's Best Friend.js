function bestFriend(txt, a, b) {
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === a) {
            if (txt[i + 1] !== b) {
                return false;
            }
        }
    }
    return true;
}

console.log(bestFriend('', 'z', 'h')) //, true, `bestFriend('', 'z', 'h')`)
console.log(bestFriend('h', 'z', 'h')) //, true, `bestFriend('h', 'z', 'h')`)
console.log(bestFriend('abhc', 'z', 'h')) //, true, `bestFriend('abhc', 'z', 'h')`)

console.log(bestFriend('zh', 'z', 'h')) //, true, `bestFriend('zh', 'z', 'h')`)
console.log(bestFriend('zoo wee mama', 'm', 'a')) //, true, `bestFriend('zoo wee mama', 'm', 'a')`)
console.log(bestFriend('i found an ounce with my hound', 'o', 'u')) //, true, `bestFriend('i found an ounce with my hound', 'o', 'u')`)
console.log(bestFriend('he headed to the store', 'h', 'e')) //, true, `bestFriend('he headed to the store', 'h', 'e')`)
console.log(bestFriend('those were their thorns they said', 't', 'h')) //, true, `bestFriend('those were their thorns they said', 't', 'h')`)


console.log(bestFriend('z', 'z', 'h')) // false, `bestFriend('z', 'z', 'h')`)
console.log(bestFriend('aza', 'z', 'h')) // false, `bestFriend('aza', 'z', 'h')`)
