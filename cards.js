export let dealer = [];
export let player = [];
let dealerSide = document.querySelector(".game__dealer");
let playerSide = document.querySelector(".game__player");

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

export const distributeCardsToDealer = () => {
    dealer.push(getRandomCard(deckOfCard));

    dealerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top dealerNumber">${dealer[dealer.length - 1]}</h3>
    <h3 class="card__content card__content--middle dealerSuit">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom dealerNumber">${dealer[dealer.length - 1]}</h3>
</div>`;
    
    const dealerSuit = document.querySelector(".dealerSuit");
    const dealerNumber = document.querySelectorAll(".dealerNumber");

    if (dealerSuit.innerHTML === "❤️" || dealerSuit.innerHTML === "♦️") {
        dealerNumber.forEach((numberObj) => {
            numberObj.classList.add("card__content--red");
        });
    } 
};

export const distributeCardsToPlayer = () => {
    player.push(getRandomCard(deckOfCard));

    playerSide.innerHTML += `<div class="card">
    <h3 class="card__content card__content--top playerNumber">${player[player.length - 1]}</h3>
    <h3 class="card__content card__content--middle playerSuit">${getRandomSuit(suits)}</h3>
    <h3 class="card__content card__content--bottom playerNumber">${player[player.length - 1]}</h3>
    </div>`;

    const playerSuit = document.querySelector(".playerSuit");
    const playerNumber = document.querySelectorAll(".playerNumber");

    if (playerSuit.innerHTML === "❤️" || playerSuit.innerHTML === "♦️") {
        playerNumber.forEach((numberObj) => {
            numberObj.classList.add("card__content--red");
        });
    }
}
