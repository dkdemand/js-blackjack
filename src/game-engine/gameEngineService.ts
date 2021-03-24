
const createDeck = () => {
    const deck = []
    const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    const suits = ['Spades','Hearts','Diamonds','Clubs']
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < cardValue.length; x++) {
						deck.push([cardValue[x], suits[i]])
        }
    }
    return deck;
}
console.log(createDeck())
// gameStart()
// shuffle()
// deal()
// evaluateHand()
// createDeck()
// hit()
// stay()
// bet() // one of the first actions.. initial bet
// payout() .. winnnings
