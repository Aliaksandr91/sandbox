function logicalCalc(array, op){
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        switch (op) {
            case 'AND':
                result = result && array[i];
                break;
            case 'OR':
                result = result || array[i];
                break;
            case 'XOR':
                result = result !== array[i];
                break;
        }
    }
    return result;
}

console.log(logicalCalc([true, true, true, false], "AND"))// false
console.log(logicalCalc([true, true, true, false], "OR"))// true
console.log(logicalCalc([true, true, true, false], "XOR"))// true
console.log(logicalCalc([true, true, false, false], "AND"))// false
console.log(logicalCalc([true, true, false, false], "OR"))// true
console.log(logicalCalc([true, true, false, false], "XOR"))// false
console.log(logicalCalc([true, false, false, false], "AND"))// false
console.log(logicalCalc([true, false, false, false], "OR"))// true
console.log(logicalCalc([true, false, false, false], "XOR"))// true
console.log(logicalCalc([true, true], "AND"))// true
console.log(logicalCalc([true, true], "OR"))// true
console.log(logicalCalc([true, true], "XOR"))// false
console.log(logicalCalc([false, false], "AND"))// false
console.log(logicalCalc([false, false], "OR"))// false
console.log(logicalCalc([false, false], "XOR"))// false
console.log(logicalCalc([false], "AND"))// false
console.log(logicalCalc([false], "OR"))// false
console.log(logicalCalc([false], "XOR"))// false
console.log(logicalCalc([true], "AND"))// true
console.log(logicalCalc([true], "OR"))// true
console.log(logicalCalc([true], "XOR"))// true
