
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
    return cards[randomNumber];
};

const getRandomSuit = (suits) => {
    const randomNumber = Math.floor(Math.random() * suits.length);
    return suits[randomNumber];
}


const displayCards = () => {
    dealerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top dealerNumber">${dealer[0]}</h3>
    <h3 class="card__content card__content--middle dealerSuit">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom dealerNumber">${dealer[0]}</h3>
</div>`;

    playerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top playerFirstCardNumber">${player[0]}</h3>
    <h3 class="card__content card__content--middle playerFirstCardSuit">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom playerFirstCardNumber">${player[0]}</h3>
    </div>`;
    
    playerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top playerSecondCardNumber">${player[1]}</h3>
    <h3 class="card__content card__content--middle playerSecondCardSuit">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom playerSecondCardNumber">${player[1]}</h3>
    </div>`;

    const dealerSuit = document.querySelector(".dealerSuit");
    const dealerNumber = document.querySelectorAll(".dealerNumber");
    const playerFirstCardSuit = document.querySelector(".playerFirstCardSuit");
    const playerSecondCardSuit = document.querySelector(".playerSecondCardSuit");
    const playerFirstCardNumber = document.querySelectorAll(".playerFirstCardNumber");
    const playerSecondCardNumber = document.querySelectorAll(".playerSecondCardNumber");

    if (dealerSuit.innerHTML === "❤️" || dealerSuit.innerHTML === "♦️") {
        dealerNumber.forEach((numberObj) => {
            numberObj.classList.add("card__content--red");
        });
    }

    if (playerFirstCardSuit.innerHTML === "❤️" || playerFirstCardSuit.innerHTML === "♦️") {
        playerFirstCardNumber.forEach((numberObj) => {
            numberObj.classList.add("card__content--red");
        });
    }

    if (playerSecondCardSuit.innerHTML === "❤️" || playerSecondCardSuit.innerHTML === "♦️") {
        playerSecondCardNumber.forEach((numberObj) => {
            numberObj.classList.add("card__content--red");
        });
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







