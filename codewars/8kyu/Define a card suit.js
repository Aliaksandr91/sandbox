function defineSuit(card) {
    const temp = card[card.length - 1]
    switch (temp) {
        case ('♣'): return 'clubs'
        case ('♦'): return 'diamonds'
        case ('♥'): return 'hearts'
        case ('♠'): return 'spades'
    }
}

console.log(defineSuit('Q♠'))// 'spades'
console.log(defineSuit('9♦'))// 'diamonds'
console.log(defineSuit('J♥'))// 'hearts'
