function longest(s1, s2) {
    return `${s1}${s2}`.split('').sort().filter((item, index, arr) => arr.indexOf(item) === index).join('');
}

console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) //"abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions")) //"acefghilmnoprstuy")
