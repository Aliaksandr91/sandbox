var countSheep = function (num){
    //your code here
    let res = ''
    if (num === 1) {
        res = "1 sheep..."
    } else {
        for (let i = 1; i <= num; i++) {
            res = res + `${i} sheep...`
        }
    }

    return res.trim()
}
console.log(countSheep(0))  // ""
console.log(countSheep(1))  // "1 sheep..."
console.log(countSheep(2))  // "1 sheep...2 sheep..."
console.log(countSheep(3))  // "1 sheep...2 sheep...3 sheep..."