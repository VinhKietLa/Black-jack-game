// This function displays the name of the user on the chip selection page.
let playerTitle = document.getElementById('playerName');


// Creates array to store the card icons, suits and integers for each card.
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diamonds", "hearts", "spades", "clubs"];
let numbervalue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
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
    return deck;
}
let deck = getDeck();

// This function loops through 2000 times and generates a random number between 1-52 and swaps the location of two object pair and executes the function that shows the cards on the page.
function shuffle() {
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
let gameOver1 = false;
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
    // let secondCard = Math.floor((Math.random() * deck.length));
    let c1 = deck[firstCard];
    // let c2 = deck[secondCard];
    let newArray = [];
    newArray.push(c1);
    // newArray.push(c2);
    for (let i = 0; i < newArray.length; i++) {
        var card = document.createElement("div");
        var icon = '';
        if (newArray[i].Suit === 'hearts') {
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
        if (gameOver === false && event.target.value === 'Deal') {
            test2.appendChild(card);
            playerSum += c1.NumberV;
            cardSum.innerHTML = playerSum
            return playerSum;
        } else if (gameOver === false && event.target.value === 'Hit') {
            test2.appendChild(card);
            playerSum += c1.NumberV++;
            cardSum.innerHTML = playerSum
            return playerSum;
        }
        else if (dealerSum <= 16 && gameOver1 === false) {
            smokey.appendChild(card);
            console.log(dealerSum);
            dealerSum += c1.NumberV;
            cardSum2.innerHTML = newArray[i].NumberV;
            console.log('Apple');
            return dealerSum;
        }
        else {
            smokey.appendChild(card);
            dealerSum += c1.NumberV;
            cardSum2.innerHTML = dealerSum;
            console.log('Banana');
            return dealerSum;
        }
    }

}

// When called this function will generate and display two cards for the player.
function dealHands() {
    if (gameOver === false) {
        shuffle();
        isAlive = true;
        setTimeout(displayRandomCards, 1000, event);
        setTimeout(hidefirstcard, 1001);
        setTimeout(displayRandomCards, 1500, event);
        setTimeout(stillAlive, 2000, event);
        dealbtn.style.display = 'none';
        hitbtn.style.display = 'inline';
        doublebtn.style.display = 'inline';
        standbtn.style.display = 'inline';
        playingwager.style.display = 'inline';
        playingbalance.style.display = 'inline';
    }
}
// hides the dealers first card when game starts.
function hidefirstcard() {
    smokey.firstChild.style.display = 'none';
    var img = document.createElement("img");
    img.src = "../Images/rearofcard.jpeg";
    img.width = "95";
    img.height = "150";
    img.className = 'pokecard';
    smokey.appendChild(img);
    smokey.firstChild.classList.add('Ivy');
}

// When called this function will provide the player with 1 additional card.
function newCard() {
    if (isAlive === true) {
        let newdraw = displayRandomCards(event);
        shuffle();
        stillAlive();
    };
}

//This function keeps a constant check on the chip balance and displays it at at all times

// let newDisplayBalance = () => {

//     let me = auth.currentUser;
//     console.log(me);
//     const docRef = db.collection("users");

//     docRef.doc((auth.currentUser.uid))
//         .onSnapshot((doc) => {
//             console.log("Current data: ", doc.data().name);
//             balance.innerHTML = doc.data().Balance;
//             playingbalance.innerHTML = 'Balance: $' + doc.data().Balance;

//         });
// };

// setTimeout(newDisplayBalance, 2000);

//This function updates the database with the users new balance based on the game result
function updatebalance() {
    if (messageEl2.textContent === 'PLAYER LOST!') {
        const docRef = db.collection("users").doc((auth.currentUser.uid));
        balance.innerHTML - currentwager.innerHTML;
        let updatedBalance = parseInt(balance.innerHTML) - parseInt(currentwager.innerHTML);
        playingbalance.innerHTML = 'Balance: $' + `${updatedBalance}`;

        console.log(docRef);
        console.log('LOSER!');
        docRef.update({
            Balance: updatedBalance,
        }).then(() => {
            console.log("Document updated"); // Document updated

        }).catch((error) => {
            console.log("Error updating doc", error);
        });
    } else if (messageEl2.textContent === 'PLAYER WINS!') {
        const docRef = db.collection("users").doc((auth.currentUser.uid));
        balance.innerHTML + currentwager.innerHTML;
        let updatedBalance = parseInt(balance.innerHTML) + parseInt(currentwager.innerHTML);
        console.log(updatedBalance);
        playingbalance.innerHTML = 'Balance: $' + `${updatedBalance}`;

        console.log(docRef);

        docRef.update({
            Balance: updatedBalance,
        }).then(() => {
            console.log("Document updated"); // Document updated

        }).catch((error) => {
            console.log("Error updating doc", error);
        });
    }
};


// When called this function will provide the dealer with 2 cards, this executes after the player presses the stand button.
function dealersTurn() {
    let removeimg = document.querySelector('.Ivy');
    removeimg.style.display = 'inline';
    let el = document.querySelector('.pokecard');
    el.remove();
    gameOver = true;
    stillAlive();
    if (dealerSum <= 17) {
        do {
            displayRandomCards(event);
        }
        while (dealerSum <= 17)
    }
    cardSum2.innerHTML = dealerSum;
    setTimeout(dealerPlayer, 1000);
    console.log(dealerSum);
    console.log(playerSum);
    hitbtn.style.display = 'none';
    doublebtn.style.display = 'none';
    standbtn.style.display = 'none';
    setTimeout(updatebalance, 1500);
}

function dealerdeal() {
    for (var i = 0; i < 20; i++) {
        if (dealerSum <= 17) {
            displayRandomCards(event);
        }
    }
}

//When called this function will generate two cards for the dealer.

function dealDealerHands() {
    console.log(gameOver1);
    if (gameOver1 === false) {
        setTimeout(displayRandomCards, 1000, event);
        setTimeout(displayRandomCards, 1500, event);
    }
};

// This function prints out the winner between dealer and player
function dealerPlayer() {
    let message1 = '';
    isAlive = false;
    if (dealerSum > playerSum && dealerSum <= 21) {
        message1 = 'PLAYER LOST!';
    } else if (dealerSum > 21 && playerSum > 21) {
        message1 = 'BOTH PLAYERS LOST!';
    } else if (dealerSum < playerSum && playerSum <= 21) {
        message1 = 'PLAYER WINS!';
    } else if (dealerSum === playerSum) {
        message1 = 'TIE BREAKER!';
    } else if (dealerSum < playerSum && playerSum > 21) {
        message1 = 'PLAYER LOST!';
    } else if (dealerSum === 21 && playerSum < 21) {
        message1 = 'PLAYER LOST!';
    } else if (dealerSum > 21 && playerSum <= 21) {
        message1 = 'PLAYER WINS!';
    } else {
        message1 = 'No hands dealt!';
    }
    return messageEl2.textContent = message1;
}

// This function prints out a message for the player

function stillAlive() {
    let messageEl = document.getElementById('messageSum');
    let message = '';
    if (playerSum <= 20 && gameOver === false) {
        message = "Do you want to draw a new card? 🙂"
        gameOver = false;
    } else if (playerSum === 21 && gameOver === false) {
        message = "Wohoo! You've got Blackjack! 🥳"
        gameOver = true;
        dealersTurn();
    } else if (playerSum > 21 && gameOver === false) {
        console.log('executed')
        message = "You're out off the game! 😭"
        isAlive = false;
        gameOver = true;
        dealersTurn();
    } else if (gameOver === true) {
        message = "";
    }
    return messageEl.textContent = message;
}

//Event listener for UI buttons and also sets the buttons as hidden as default.
let dealbtn = document.getElementById('deal');
let hitbtn = document.getElementById('hit');
let standbtn = document.getElementById('stand');
let doublebtn = document.getElementById('double');
let drawdealerhands = document.getElementById('drawdealerhands');


dealbtn.addEventListener('click', (dealHands));
drawdealerhands.addEventListener('click', (dealDealerHands));
dealbtn.style.display = 'none';
hitbtn.addEventListener('click', (newCard));
hitbtn.style.display = 'none';
doublebtn.addEventListener('click', (doublewager));
doublebtn.style.display = 'none';
standbtn.addEventListener('click', (dealersTurn));
standbtn.style.display = 'none';


// This executes the deck and shuffling of the card when the page loads
function load() {
    deck = getDeck();
    shuffle();
}

window.addEventListener('load', load);

//wager options

const playingbalance = document.querySelector('.playingbalance');
playingbalance.style.display = 'none';
let wager = 0;
let balance = document.querySelector('.current-chip-balance');
balance.innerHTML = parseInt(500);
//This cycles through the chips and assigns a HTML value;
const chip10 = document.getElementById('chip-10');
const chip25 = document.getElementById('chip-25');
const chip50 = document.getElementById('chip-50');
const chip100 = document.getElementById('chip-100');
const currentwager = document.querySelector('.current-wager');

[chip10, chip25, chip50, chip100].forEach((element) => {
    element.addEventListener('click', (e) => {
        if (element.id === 'chip-10') {
            currentwager.innerHTML = 10;
        } else if (element.id === 'chip-25') {
            currentwager.innerHTML = 25;
        } else if (element.id === 'chip-50') {
            currentwager.innerHTML = 50;
        } else if (element.id === 'chip-100') {
            currentwager.innerHTML = 100;
        } else {
            currentwager.innerHTML = 0;
        }
        return currentwager;
    });
});

//This changes thr formatting of the screen to have the game on the left and scores/buttons on the right
const playchangedisplay = document.getElementById('playchangedisplay');

function togglePlayScreen() {
    if (playchangedisplay.classList.contains('is-12')) {
        playchangedisplay.classList.remove('is-12');
        playchangedisplay.classList.add('is-8');
    }

    else if (playchangedisplay.classList.contains('is-8')) {
        playchangedisplay.classList.remove('is-8');
        playchangedisplay.classList.add('is-12');
    };
}


//This function when clicked doubles the users wager
const playingwager = document.querySelector('.playingwager');
playingwager.style.display = 'none';

function doublewager() {
    console.log(currentwager.innerHTML);
    currentwager.innerHTML = parseInt(currentwager.innerHTML) * 2;
    playingwager.innerHTML = 'Wager: $' + currentwager.innerHTML;
}

let playagain = document.getElementById('playagain');

function playAgain() {
    location.reload();
}

playagain.addEventListener('click', (playAgain));


//This starts the game after the user has selected a wager and presses play, hides the chip selection too.
const startGameBtn = document.getElementById('start-game-button');
const wagermenu = document.getElementById('wagerchips');

startGameBtn.addEventListener('click', (e) => {
    if (parseInt(currentwager.innerHTML[0]) === 0) {
        alert('Please select a bet');
    } else {
        togglePlayScreen();
        wagermenu.style.display = 'none';
        dealbtn.style.display = 'inline-block';
        playingwager.innerHTML += parseInt(currentwager.innerHTML);
        // playingbalance.innerHTML = 'Balance:  $' + parseInt(balance.innerHTML);
        let clickEvent = new Event('click');
        let secondevent = new Event('click');
        dealbtn.dispatchEvent(clickEvent);
        drawdealerhands.dispatchEvent(secondevent);
    };
});

// const docRef = db.collection("users");

// docRef.get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         console.log(doc.id, " => ", doc.data());
//     });
// });






//REAL TIME DATABASE QUERIES//
// rootRef.on('child_added',  => {
//     let playerTitle = snap.val();
// });
// Realtime database this gets the first_name of the most recently added name from the db and display it in-game//
// rootRef.on('child_added', (snapshot) => {
//     const newPost = snapshot.val();
//     playerTitle.innerHTML = newPost.First_Name;
//     console.log(newPost);
// });

//This updates the chick balance on display.
// rootRef.on('child_added', (snapshot) => {
//     const newScore = snapshot.val();
//     let balance = document.querySelector('.current-chip-balance');
//     balance.innerHTML = parseInt(newScore.Balance);
//     playingbalance.innerHTML = 'Balance: $' + newScore.Balance;
//     console.log(newScore);
// });

// let george = rootRef.orderByChild("Balance").limitToLast(1).on("child_added", function (snapshot) {
//     let kiet = snapshot.key;
//     console.log(kiet);
//     balance.innerHTML - currentwager.innerHTML;
//     let updatedBalance = balance.innerHTML - currentwager.innerHTML;
//     const newData = {
//         Balance: 600
//     };
//     rootRef.child(kiet).update(newData);
// });
