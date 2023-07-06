function pipeFix(numbers){
    let start = numbers[0];
    let end = numbers[numbers.length-1]
    let result = []
    for (let i = start; i <= end ; i++) {
        result.push(i)
    }
    return result
}
