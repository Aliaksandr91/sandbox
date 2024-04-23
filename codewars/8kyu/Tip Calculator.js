function calculateTip(amount, rating) {
    const serviceRating = rating.toLowerCase();
    let tipPercentage;
    switch (serviceRating) {
        case 'terrible':
            tipPercentage = 0;
            break;
        case 'poor':
            tipPercentage = 0.05;
            break;
        case 'good':
            tipPercentage = 0.10;
            break;
        case 'great':
            tipPercentage = 0.15;
            break;
        case 'excellent':
            tipPercentage = 0.20;
            break;
        default:
            return 'Rating not recognised';  // If rating is not recognised
    }
    return Math.ceil(amount * tipPercentage)
}
console.log(calculateTip(20, "Excellent"))// 4
console.log(calculateTip(26.95, "good"))// 3
