// Creates array to store the card card and suit numbers.

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];

// This function loops through each card and suit and creates an object pair e.g [{value: 'A', Suit: 'Spades'}] and returns the pairs in the variable deck.

function getDeck() {
    let deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (let x = 0; x < cards.length; x++) {
            let card = { Value: cards[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

// This function loops through 1000 times and generates a random number between 1-52 and swaps the location of two object pair and executes the function that shows the cards on the page.

function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    displayRandomCards()
}

function displayRandomCards() {
    document.getElementById('deck').innerHTML = '';

    let firstCard = Math.floor((Math.random() * deck.length));
    let secondCard = Math.floor((Math.random() * deck.length));
    let thirdCard = Math.floor((Math.random() * deck.length));
    let fourthCard = Math.floor((Math.random() * deck.length));
    let c1 = deck[firstCard];
    let c2 = deck[secondCard];
    let c3 = deck[thirdCard];
    let c4 = deck[fourthCard];

    let newArray = [ ];
    console.log(deck[firstCard]);
    console.log(deck[secondCard]);
    newArray.push(c1)
    newArray.push(c2)
    newArray.push(c3)
    newArray.push(c4)

    console.log(c1.Suit);
    console.log(c2.Suit);
    console.log(newArray);
    console.log(newArray[0].Suit);
    console.log(newArray[1].Suit);

    console.log(newArray.length);
  

    for (let i = 0; i<newArray.length; i++) {
        var card = document.createElement("div");
        var icon = '';
    if (newArray[i].Suit == 'hearts')
        icon = '&hearts;';
    else if (newArray[i].Suit == 'spades')
        icon = '&spades;';
    else if (newArray[i].Suit == 'diamonds')
        icon = '&diams;';
    else
        icon = '&clubs;';
    card.innerHTML = newArray[i].Value + '' + icon;
    card.classList.add('card');
    card.classList.add('suit');
    card.classList.add(deck[i].Suit);
    document.getElementById("deck").appendChild(card);
}
}


// This function creates the Divs and classes that will actually display the object pairs on the page. 

// function renderDeck() {
//     document.getElementById('deck').innerHTML = '';

//     for (var i = 0; i < deck.length; i++) {
//         var card = document.createElement("div");
//         var icon = '';
//         if (deck[i].Suit == 'hearts')
//             icon = '&hearts;';
//         else if (deck[i].Suit == 'spades')
//             icon = '&spades;';
//         else if (deck[i].Suit == 'diamonds')
//             icon = '&diams;';
//         else
//             icon = '&clubs;';

//         card.innerHTML = deck[i].Value + '' + icon;
//         card.classList.add('card');
//         card.classList.add('suit');
//         card.classList.add(deck[i].Suit);
//         document.getElementById("deck").appendChild(card);
//     }
// }

// This executes the functions when the page loads

function load() {
    deck = getDeck();
    shuffle();
    // renderDeck();
    displayRandomCards()
}

window.addEventListener('load', load);


//Thus function works on the playername page and directs the user to proceed with playing or going back to the homepage.

let username = document.getElementById("username");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.location.href = '/html/playinggame.html';
    return playerName;
});

cancelBtn.addEventListener('click', (event) => {
    document.location.href = '../index.html';
});

console.log(playerName);



















// let sum = 0;
// console.log(sum);
// let isAlive = false;
// let hasBlackJack = false;
// let message = ''
// let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
// let cardsEl = document.getElementById('cards-el');
// let newcard = document.getElementById('newcard');
// let startgame = document.getElementById('startgame');
// let gameOver = false;


/*Name page*/

/*This function creates the random cards used for blackjack*/

// function getRandomCard() {
//     // if 1     -> return 11
//     // if 11-13 -> return 10
//     let randomNumer = Math.floor(Math.random() * 13) + 1
//     if (randomNumer > 10) {
//         return 10
//     } else if (randomNumer === 1) {
//         return 11
//     } else {
//         return randomNumer
//     }
// }


/*This executes the game when the user presses on the start game button*/

// function startGame() {
//     if (gameOver === false) {
//     isAlive = true;
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//     cards.push(firstCard);
//     cards.push(secondCard);
//     sum = firstCard + secondCard;
//     renderGame();
//     }
// }

// startgame.addEventListener('click', (startGame));


/*This renders the game and displays the cards and sum*/
// function renderGame() {
//     console.log(sum);
//     console.log(sum);
//     cardsEl.textContent = "Cards: ";

//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += " " + cards[i] + ' ';
//     }

//     sumEl.textContent = "Sum: " + sum

//     if (sum <= 20) {
//         message = "Do you want to draw a new card? 🙂"
//         console.log(cards);
//         gameOver = true;
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack! 🥳"
//         hasBlackJack = true;
//         gameOver = true;  
//     } else {
//         message = "You're out off the game! 😭"
//         isAlive = false;
//         gameOver = true;  
//     }
//     messageEl.textContent = message;

// }

/*This function draws a new card*/
// function newCard() {
//     if (isAlive === true && hasBlackJack === false){
//     console.log('Drawing a new card from the deck');
//     let newdraw = getRandomCard();
//     sum += newdraw;
//     cards.push(newdraw);
//     renderGame();
//     };
// }
// newcard.addEventListener('click', (newCard));
