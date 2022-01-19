
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon='&hearts;';
		else if (deck[i].Suit == 'spades')
		icon = '&spades;';
		else if (deck[i].Suit == 'diamonds')
		icon = '&diams;';
		else
		icon = '&clubs;';

		card.innerHTML = deck[i].Value + '' + icon;
        card.classList.add('card');
        card.classList.add('suit');
		card.classList.add(deck[i].Suit);
		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
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


