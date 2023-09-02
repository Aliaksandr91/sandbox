function tripleTrouble(one, two, three) {
    let arr1 = one.split('')
    let arr2 = two.split('')
    let arr3 = three.split('')
    let resArr = []
    for (let i = 0; i < arr1.length; i++) {
        resArr.push(arr1[i]+arr2[i]+arr3[i])
    }
    return resArr.join('')
}

console.log(tripleTrouble("aaa", "bbb", "ccc"))  // "abcabcabc"
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"))  // "abcabcabcabcabcabc"
console.log(tripleTrouble("burn", "reds", "roll"))  // "brrueordlnsl"
console.log(tripleTrouble("Sea", "urn", "pms"))  // "Supermans"
console.log(tripleTrouble("LLh", "euo", "xtr"))  // "LexLuthor"