function getCount(str) {
    let count = 0;
    const letters = 'aeiou'
    for (let i = 0; i < str.length; i++) {
        if (letters.indexOf(str[i]) > -1){
            count++
        }
    }
    return count;
}

console.log(getCount("abracadabra")) // 5