function converter (mpg) {
    const gallon = 4.54609188
    const mile = 1.609344
    return Number((mpg*mile/gallon).toFixed(2))
}
console.log(converter(10))  // 3.54
console.log(converter(20))  // 7.08
console.log(converter(30))  // 10.62