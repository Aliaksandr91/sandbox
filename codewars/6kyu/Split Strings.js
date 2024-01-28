function solution(str) {
    const res = []
    let i = 0;
    while (i < str.length) {
        let pair = str.charAt(i) + str.charAt(i + 1)
        if (i === str.length - 1 && str.length % 2 !== 0) {
            pair += '_'
        }
        res.push(pair)
        i += 2
    }
    return res
}

console.log(solution("abcdef"))// ["ab", "cd", "ef"]
console.log(solution("abcdefg"))// ["ab", "cd", "ef", "g_"]
console.log(solution(""))// []