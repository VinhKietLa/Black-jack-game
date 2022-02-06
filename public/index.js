const database = firebase.database();
const rootRef = database.ref('users');

let playerTitle = document.getElementById('playerName');

// rootRef.on('child_added',  => {
//     let playerTitle = snap.val();
// });


rootRef.on('child_added', (snapshot) => {
    const newPost = snapshot.val();
    playerTitle.innerHTML = newPost.first_name;
  });

// Creates array to store the card icons, suits and integers for each card.

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let numbervalue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let cardz = [];
// This function loops through each card and suit and creates an object e.g [{value: 'A', Suit: 'Spades', NumberV: integer}] and returns the 3 values in the variable deck.

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

let deck = getDeck();


// This function loops through 2000 times and generates a random number between 1-52 and swaps the location of two object pair and executes the function that shows the cards on the page.

function shuffle() {
    console.log(deck);
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 2000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let location3 = Math.floor((Math.random() * deck.length));
        let location4 = Math.floor((Math.random() * deck.length));

        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
        let tmp2 = deck[location3];
        deck[location3] = deck[location4];
        deck[location3] = tmp2;
    }
}

//This functions creates two cards for the player hand.

let isAlive = false;
let gameOver = false;
let playerSum = 0;
let dealerSum = 0;
let cardSum = document.querySelector('#cardSum');
let cardSum2 = document.querySelector('#cardSum2');
let messageEl = document.getElementById('messageSum');
let messageEl2 = document.getElementById('winnerMessage');
let smokey = document.getElementById('dealercard1');

function displayRandomCards(event) {
    let smokey = document.getElementById('dealercard1');
    let test2 = document.querySelector('.test2');
    let firstCard = Math.floor((Math.random() * deck.length));
    let secondCard = Math.floor((Math.random() * deck.length));

    let c1 = deck[firstCard];
    let c2 = deck[secondCard];
    let newArray = []; 
    newArray.push(c1);
    newArray.push(c2);
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        var card = document.createElement("div");
        var icon = '';
        console.log(newArray[i].Suit)
        if (newArray[i].Suit === 'hearts'){
            icon = '&hearts;';
        }
        else if (newArray[i].Suit === 'spades') {
            icon = '&spades;';
        }
        else if (newArray[i].Suit === 'diamonds') {
            icon = '&diams;';
        }
        else {
            icon = '&clubs;';
        }
        card.innerHTML = newArray[i].Value + '' + icon;
        card.classList.add('card');
        card.classList.add(newArray[i].Suit);

        console.log(card);        
        if (gameOver === false && event.target.value === 'Deal') {
            test2.appendChild(card);
            playerSum += c1.NumberV;
            cardSum.innerHTML = playerSum
            return playerSum;
        } else if (gameOver === false && event.target.value === 'Hit') {
            test2.appendChild(card);
            playerSum += c1.NumberV;
            cardSum.innerHTML = playerSum
            return playerSum;
        }
        else if (dealerSum <= 16) {
            smokey.appendChild(card);
            dealerSum += c1.NumberV;
            cardSum2.innerHTML = dealerSum;
            return dealerSum;
        }
    }
}

// When called this function will generate and display two cards for the player.
function dealHands() {
    if (gameOver === false) {
        shuffle();
        isAlive = true;
        let firstCard = displayRandomCards(event);
        let secondCard = displayRandomCards(event);
        stillAlive();
        dealbtn.style.display ='none';
        hitbtn.style.display ='inline';
        standbtn.style.display ='inline';
    }
}

// When called this function will provide the player with 1 additional card.

function newCard() {
    if (isAlive === true) {
        console.log('Drawing a new card from the deck');
        let newdraw = displayRandomCards(event);
        shuffle();
        stillAlive();
    };
}

// When called this function will provide the dealer with 2 cards, this executes after the player presses the stand button.

function dealersTurn() {
    gameOver = true;
    stillAlive();
    displayRandomCards(event);
    displayRandomCards(event);
    for (var i = 0; i < 20; i++) {
        if (dealerSum <= 15) {
            displayRandomCards(event);
        }

    }
    dealerPlayer();
    return gameOver;
}

// This function prints out the winner between dealer and player

function dealerPlayer() {
    let message1 = '';
    isAlive = false;
    if (dealerSum > playerSum && dealerSum < 21) {
        message1 = 'PLAYER LOST!';
    } else if (dealerSum > 21 && playerSum > 21) {
        message1 = 'BOTH PLAYERS LOST!';
    } else if (dealerSum < playerSum && playerSum <= 21) {
        message1 = 'PLAYER WINS!';
    } else if (dealerSum === playerSum) {
        message1 = 'TIE BREAKER!';
    } else if (dealerSum > 21 && playerSum < 21) {
        message1 = 'PLAYER WINS!';
    } else if (dealerSum < playerSum && playerSum > 21) {
        message1 = 'PLAYER LOST!';
    } else if (dealerSum === 21 && playerSum < 21) {
        message1 = 'PLAYER LOST!';
    } else {
        message1 = 'No hands dealt!';
    }
   return messageEl2.textContent = message1;
}

// This function prints out a message for the player


function stillAlive() {
    let messageEl = document.getElementById('messageSum');
    let message = '';
    if (gameOver === true){ 
        message = '';
    }
    else if (playerSum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        gameOver = false;
    } else if (playerSum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
        gameOver = true;
    } else if (playerSum > 21) {
        console.log('executed')
        message = "You're out off the game! 😭"
        isAlive = false;
        gameOver = true;
        dealersTurn();
    }
    return messageEl.textContent = message;
}

//Event listener for UI buttons

let dealbtn = document.getElementById('deal');
let hitbtn = document.getElementById('hit');
let standbtn = document.getElementById('stand');
let refreshbtn = document.getElementById('refresh');


dealbtn.addEventListener('click', (dealHands));
hitbtn.addEventListener('click', (newCard));
hitbtn.style.display = 'none';
standbtn.addEventListener('click', (dealersTurn));
standbtn.style.display = 'none';


// This executes the functions when the page loads

function load() {
    deck = getDeck();
    shuffle();
}

window.addEventListener('load', load);


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
