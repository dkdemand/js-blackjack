// Players are house/dealer and player

// Track player's chips/money.

// 1 Deck. Shuffled after every round. Deck Array with 2-10 + KJQA
// Remember Ace can be 11 or 1




// Player buttons: Hit, Stand, Place bet, New Game
 Game = {
    
}



type Card = {
    suit: string,
    rank: string,
    value: number
}

type Deck = array of Card

type Hand = array of Card

type Player = {
    id: number,
    name: string,
    cash: number,
    hand: Hand
}

type Dealer = {
    hand: Hand
}




createDeck() {
    const deck = [];
    const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = ['Spades','Hearts','Diamonds','Clubs'];
    for (let i = 0; i < cardValue.length; i++) {
        for (let x = 0; x < suits.length; x++) {
            var cardWeight = parseInt(cardValue[i]);
            if (cardValue[i] == "J" || values[i]== "Q" || values[i]== "K")
                cardWeight=10;
            if (cardValue[i] == "A")
                cardWeight = 11;
            var card = { value: cardValue[i], suit: suits[x], weight: cardWeight };
            deck.push(card);
        }
    }
    return deck;
}

shuffle() {
    // how many turns will we need ?
    // for now we will do 10
    for (var i = 0; i < 10; i++)
    {
        var randomized = Math.floor((Math.random() * deck.length));
        var temporaryValue = deck[randomized];

    }
}
