function convertHashToArray(hash){
    return Object.keys(hash).map((key) => [key, hash[key]]);
}
console.log(convertHashToArray({name: "Jeremy"})) //[["name", "Jeremy"]]
console.log(convertHashToArray({name: "Jeremy", age: 24}).sort()) //[["age", 24], ["name", "Jeremy"]]
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}).sort()) // //[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}).sort()) //[["powerLevelOver", 9000], ["product", "CodeWars"]]
console.log(convertHashToArray({})) //[]
