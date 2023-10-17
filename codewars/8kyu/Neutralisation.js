function neutralise(s1, s2) {
    let result = '';

    for (let i = 0; i < s1.length; i++) {
        const char1 = s1[i];
        const char2 = s2[i];

        if (char1 === '+' && char2 === '+') {
            result += '+';
        } else if (char1 === '-' && char2 === '-') {
            result += '-';
        } else {
            result += '0';
        }
    }
    return result;
}
console.log(neutralise("--++--", "++--++")) // "000000"
console.log(neutralise("-+-+-+", "-+-+-+")) // "-+-+-+"
console.log(neutralise("-++-", "-+-+")) // "-+00"
console.log(neutralise("--++", "++++")) // "00++"
console.log(neutralise("+++--+---", "++----++-")) // "++0--000-"
console.log(neutralise("-----", "-----")) // "-----"
console.log(neutralise("-+", "++")) // "0+"
console.log(neutralise("--", "-+")) // "-0"
console.log(neutralise("-++", "+--")) // "000"
console.log(neutralise("++-++--++-", "-+++-++-++")) // "0+0+0000+0"
console.log(neutralise("-++-+-++-", "+-++++---")) // "00+0+000-"
console.log(neutralise("---++-+--", "-+++--++-")) // "-00+0-+0-"
console.log(neutralise("+-----+++-", "--+-+-++--")) // "0-0-0-++0-"
console.log(neutralise("+-----+-", "---++-++")) // "0--00-+0"
console.log(neutralise("-+--+-+---", "-+--+-+-+-")) // "-+--+-+-0-"
console.log(neutralise("+-+", "-++")) // "00+"
console.log(neutralise("-++", "-+-")) // "-+0"
console.log(neutralise("---+", "-+++")) // "-00+"
console.log(neutralise("+--", "+--")) // "+--"
console.log(neutralise("--+++-+-", "+++++---")) // "00+++-0-"