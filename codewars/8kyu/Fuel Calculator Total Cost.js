function fuelPrice(litres, pricePerLitre) {
    let discountPerLitre = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
    let totalCost = litres * (pricePerLitre - discountPerLitre);
    return parseFloat(totalCost.toFixed(2));
}

console.log(fuelPrice(5, 1.23))// 5.65
console.log(fuelPrice(8, 2.5))// 18.40
console.log(fuelPrice(5, 5.6))// 27.50
