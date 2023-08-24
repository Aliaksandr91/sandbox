function array(string) {
    let arr = string.split(',')
    return arr.slice(1, arr.length-1).length === 0 ? null : arr.slice(1, arr.length-1).join(' ')
}

console.log(array(''))// null
console.log(array('1')) // null
console.log(array('A1,B2'))  // null
console.log(array('1,2,3')) // '2'
console.log(array('1,2,3,4')) // '2 3'
console.log(array('A1,B2,C3,D4,E5')) // 'B2 C3 D4'
console.log(array('A,1,23,456,78,9,Z')) // '1 23 456 78 9'