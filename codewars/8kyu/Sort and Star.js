function twoSort(s) {
    let elArr = [...s].sort()[0].split('')
    for (let i = 0; i < elArr.length - 1; i++) {
        elArr[i] = elArr[i]+ '***'
    }
    return elArr.join('')
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))  // 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))  // 'a***r***e'
//----------------------------------------------------
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// }