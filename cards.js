export const deckOfCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export const suits = ["♠️", "❤️", "♣️", "♦️"];

export const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    return cards[randomNumber];
};

export const getRandomSuit = (suits) => {
    const randomNumber = Math.floor(Math.random() * suits.length);
    return suits[randomNumber];
}
