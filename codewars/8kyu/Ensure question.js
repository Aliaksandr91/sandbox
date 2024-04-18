function ensureQuestion(s) {

    return s[s.length - 1] === '?' ? s : s + '?';
}

console.log(ensureQuestion("")) //"?"
console.log(ensureQuestion("Yes")) //"Yes?"
console.log(ensureQuestion("No?")) // "No?"

