function evil(n) {
    const a = n.toString(2);
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            b++
        }

    }
    return b % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

console.log(evil(1)) //"It's Odious!"
console.log(evil(2)) //"It's Odious!"
console.log(evil(3)) //"It's Evil!"
