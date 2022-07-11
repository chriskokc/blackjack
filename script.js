
const deckOfCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let dealer = [];
let player = [];

// DOM
const startBtn = document.querySelector(".bet__btn");


// Functions
const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const cardDrawn = cards[randomNumber];
    return cardDrawn;
};

const startGame = () => {
    for (let i = 0; i < 2; i++) {
        dealer.push(getRandomCard(deckOfCard));
        player.push(getRandomCard(deckOfCard));
    }
};

// Event listener
startBtn.addEventListener("click", startGame);







