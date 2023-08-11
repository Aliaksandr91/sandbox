// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((acc, el) => acc + el,0)
}

console.log(sum([])) // 0
console.log(sum([1, 5.2, 4, 0, -1])) // 9.2