
const deckOfCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠️", "❤️", "♣️", "♦️"];
let dealer = [];
let player = [];

// DOM
const startBtn = document.querySelector(".bet__btn");
let dealerSide = document.querySelector(".game__dealer");
let playerSide = document.querySelector(".game__player");

// Functions
const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const cardDrawn = cards[randomNumber];
    return cardDrawn;
};

const getRandomSuit = (suits) => {
    const randomNumber = Math.floor(Math.random() * suits.length);
    const suitDrawn = suits[randomNumber];
    return suitDrawn;
}


const displayCards = () => {
    dealerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top">${dealer[0]}</h3>
    <h3 class="card__content card__content--middle">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom">${dealer[0]}</h3>
    </div>`;

    for (let i = 0; i < 2; i++) {
        playerSide.innerHTML += `<div class="card">
        <h3 class="card__content card__content--top">${player[i]}</h3>
        <h3 class="card__content card__content--middle">${getRandomSuit(suits)}</h3>
        <h3 class="card__content card__content--bottom">${player[i]}</h3>
        </div>`;
    }
};

const startGame = () => {
    // get random cards for both dealer and player
    for (let i = 0; i < 2; i++) {
        dealer.push(getRandomCard(deckOfCard));
        player.push(getRandomCard(deckOfCard));
    }

    // display their cards on hand
    displayCards();

};

// Event listeners
startBtn.addEventListener("click", startGame);







