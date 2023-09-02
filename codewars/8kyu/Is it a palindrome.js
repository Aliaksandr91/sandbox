function isPalindrome(x) {
    let str = x.split('').reverse().join('').toLowerCase()
   return x.toLowerCase() === str
}

console.log(isPalindrome("a"))  // true
console.log(isPalindrome("aba"))  // true
console.log(isPalindrome("Abba"))  // true
console.log(isPalindrome("hello"))  // false
console.log(isPalindrome("Bob"))  // true
console.log(isPalindrome("Madam"))  // true
console.log(isPalindrome("AbBa"))  // true
console.log(isPalindrome(""))  // true