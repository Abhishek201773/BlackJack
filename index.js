let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "Game Start";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Abhishek",
    chips: 0
};

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    sum = 0;
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    
    cards.push(firstCard);
    cards.push(secondCard);
    
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame() {
    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i]+" ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    
    if (sum < 21) {
        message = "Want to draw a new card 😀";
    } else if (sum === 21) {
        message = "You got BLACKJACK 😎👑";
        hasBlackJack = true;
        player.chips += 10;
    } else {
        message = "You're out of the game ⌚";
        isAlive = false;
        player.chips -= 10;
    }
    
    playerEl.textContent = `${player.name}: $${player.chips}`;
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function resetGame() {
    isAlive = false;
    hasBlackJack = false;
    sum = 0;
    cards = [];
    message = "Want to play a round 🙂 BlackJack on 21";
    messageEl.textContent = message;
    cardsEl.innerHTML = "Cards:";
    sumEl.textContent = "Sum:";
    renderGame();
}
