function abbrevName(name){
    return (name.split(' ').map(el=>el[0].toUpperCase())).join('.')
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))