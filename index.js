let cards = [ ]
let sum = 0;
console.log(sum);
let isAlive = false;
let hasBlackJack = false;
let message = ''
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let newcard = document.getElementById('newcard');
let startgame = document.getElementById('startgame');
let gameOver = false;


/*Name page*/

let playerName = {
    name: '',
}

let username = document.getElementById("username");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


submitBtn.addEventListener('click',(event) => {
    event.preventDefault();
    playerName.name = username.value;
    document.location.href = '/html/playinggame.html';
});

cancelBtn.addEventListener('click', (event) => {
    document.location.href = '../index.html';
});



/*This function creates the random cards used for blackjack*/

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


/*This executes the game when the user presses on the start game button*/

function startGame() {
    if (gameOver === false) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
    }
}

startgame.addEventListener('click', (startGame));


/*This renders the game and displays the cards and sum*/
function renderGame() {
    console.log(sum);
    console.log(sum);
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + ' ';
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        console.log(cards);
        gameOver = true;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
        gameOver = true;  
    } else {
        message = "You're out off the game! 😭"
        isAlive = false;
        gameOver = true;  
    }
    messageEl.textContent = message;

}

/*This function draws a new card*/
function newCard() {
    if (isAlive === true && hasBlackJack === false){
    console.log('Drawing a new card from the deck');
    let newdraw = getRandomCard();
    sum += newdraw;
    cards.push(newdraw);
    renderGame();
    };
}
newcard.addEventListener('click', (newCard));


