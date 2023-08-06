function getSum(a, b)
{
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a ; i++) {
            sum+=i
        }
    }
    if (a < b) {
        for (let i = a; i <= b ; i++) {
            sum+=i
        }
    }
    if(a === b) {
        return a
    }
    return sum
}
console.log(getSum(0,-1))//-1
console.log(getSum(0, 1))// 1
console.log(getSum(2, 2))// 2