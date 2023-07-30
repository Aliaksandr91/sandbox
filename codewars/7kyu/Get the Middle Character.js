function getMiddle(s) {
    const middleIndex = Math.floor(s.length / 2);
    if (s.length  % 2 === 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return s[middleIndex];
    }
}

console.log(getMiddle("test"))//es
console.log(getMiddle("testing"))//t
console.log(getMiddle("middle"))//dd
console.log(getMiddle("A"))//A