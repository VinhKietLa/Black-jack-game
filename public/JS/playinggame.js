let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let numbervalue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let cardz = [];

function getDeck() {
    let deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (let x = 0; x < cards.length; x++) {
            let card = { Value: cards[x], Suit: suits[i], NumberV: numbervalue[x] };
            deck.push(card);
        }
    }
    console.log(deck);
    return deck;
}

getDeck();
