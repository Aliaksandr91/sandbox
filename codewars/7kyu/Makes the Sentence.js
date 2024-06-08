function makesTheSentence(charArray, sentence) {
    function createFrequencyMap(chars) {
        const map = {};
        for (let char of chars) {
            if (char !== ' ') {
                map[char] = (map[char] || 0) + 1;
            }
        }
        return map;
    }

    const charCount = createFrequencyMap(charArray);
    const sentenceCount = createFrequencyMap(sentence);

    for (let char in sentenceCount) {
        if (sentenceCount[char] !== charCount[char]) {
            return false;
        }
    }

    return true;
}
console.log(makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], "Ducks quack."))// true
console.log(makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], "She adds."))// false
console.log(makesTheSentence(['h','e','r','a','n','.'], "He ran."))// false
console.log(makesTheSentence(['I','a','m','h','a','p','p','y','.'], "I am happy!"))// false

