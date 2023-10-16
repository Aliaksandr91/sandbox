//return price without vat
function excludingVatPrice(price) {
    if (price === null || isNaN(price)) {
        return -1;
    }
    const originalPrice = price / (1 + 0.15);
    return Math.round(originalPrice * 100) / 100;
}

console.log(excludingVatPrice(230))// 200.00
console.log(excludingVatPrice(123))// 106.96