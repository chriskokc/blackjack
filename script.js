
const deckOfCard = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let dealer = [];
let player = [];

const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    const cardDrawn = cards[randomNumber];
    return cardDrawn;
};






