function distinct(a) {
    const uniqueElements = []
    for (let i = 0; i < a.length; i++) {
        if (uniqueElements.indexOf(a[i]) === -1) {
            uniqueElements.push(a[i]);
        }
    }
    return uniqueElements;
}

console.log(distinct([1, 1, 2]))
