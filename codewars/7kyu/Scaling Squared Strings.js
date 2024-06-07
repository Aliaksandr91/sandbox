function scale(strng, k, n) {
    if (strng === '') {
        return strng
    }
    let lines = strng.split('\n');
    let horizontallyScaledLines = lines.map(line =>
        line.split('').map(char => char.repeat(k)).join('')
    );
    let verticallyScaledLines = [];
    horizontallyScaledLines.forEach(line => {
        for (let i = 0; i < n; i++) {
            verticallyScaledLines.push(line);
        }
    });
    return verticallyScaledLines.join('\n');
}

console.log(scale("abcd\efgh\ijkl\mnop", 2, 3)) //"aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
