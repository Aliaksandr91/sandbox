var humanYearsCatYearsDogYears = function (humanYears) {
    let dogYears = 0;
    let catYears = 0;
    if (humanYears === 1) {
        dogYears += 15
        catYears += 15
    } else if (humanYears === 2) {
        dogYears += 24
        catYears += 24
    } else {
        dogYears = dogYears + 24 + (humanYears-2) * 5
        catYears = catYears + 24 + (humanYears-2) * 4
    }

    return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1)) //[1,15,15]

console.log(humanYearsCatYearsDogYears(2)) //[2,24,24]

console.log(humanYearsCatYearsDogYears(10)) //[10,56,64]