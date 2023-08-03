function findShort(s){
    let arr = s.split(' ').sort((a,b)=> a.length - b.length)
    return arr[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"))// 3
console.log(findShort("Let's travel abroad shall we")) //2