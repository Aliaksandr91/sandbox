function correctPolishLetters (string) {
    const obj = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń' :'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    }
    return string.split('').map(char => obj[char] || char).join('');
}
console.log(correctPolishLetters("Jędrzej Błądziński")) //"Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")) //"Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")) //"Maria Sklodowska-Curie"

