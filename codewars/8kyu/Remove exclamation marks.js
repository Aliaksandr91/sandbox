function removeExclamationMarks(s) {
    return s = s.replace(/!/g, '');
}

console.log(removeExclamationMarks("Hello World!")) //"Hello World"