function replace(s){
    return s.replace(/[aeiouAEIOU]/g, '!');
}
console.log(replace("Hi!"))//  "H!!"
console.log(replace("!Hi! Hi!"))//  "!H!! H!!"
console.log(replace("aeiou"))//  "!!!!!"
console.log(replace("ABCDE"))//  "!BCD!"
