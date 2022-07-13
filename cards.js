import { checkScore, compareScore } from "./game.js";

export let dealer = [];
export let player = [];
export let dealerSide = document.querySelector(".game__dealer");
export let playerSide = document.querySelector(".game__player");

export const deckOfCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠️", "❤️", "♣️", "♦️"];

export const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.length);
    return cards[randomNumber];
};

const getRandomSuit = (suits) => {
    const randomNumber = Math.floor(Math.random() * suits.length);
    return suits[randomNumber];
};

export const distributeCardsToDealer = () => {
    dealer.push(getRandomCard(deckOfCard));

    dealerSide.innerHTML += `
    <div class="card">
        <h3 class="card__content card__content--top dealerNumber">${dealer[dealer.length - 1]}</h3>
        <h3 class="card__content card__content--middle dealerSuit">${getRandomSuit(suits)}</h3>
        <h3 class="card__content card__content--bottom dealerNumber">${dealer[dealer.length - 1]}</h3>
    </div>`;
    
    const dealerSuit = document.querySelectorAll(".dealerSuit");
    const dealerNumber = document.querySelectorAll(".dealerNumber");

    if (dealerSuit[dealerSuit.length - 1].innerHTML === "❤️" || dealerSuit[dealerSuit.length - 1].innerHTML === "♦️"){
        dealerNumber[dealerNumber.length - 2].classList.add("card__content--red");
        dealerNumber[dealerNumber.length - 1].classList.add("card__content--red");
    } else {
        dealerNumber[dealerNumber.length - 2].classList.add("card__content--black");
        dealerNumber[dealerNumber.length - 1].classList.add("card__content--black");
    }
};

export const distributeCardsToPlayer = () => {
    player.push(getRandomCard(deckOfCard));

    playerSide.innerHTML += `
    <div class="card">
        <h3 class="card__content card__content--top playerNumber">${player[player.length - 1]}</h3>
        <h3 class="card__content card__content--middle playerSuit">${getRandomSuit(suits)}</h3>
        <h3 class="card__content card__content--bottom playerNumber">${player[player.length - 1]}</h3>
    </div>`;

    const playerSuit = document.querySelectorAll(".playerSuit");
    const playerNumber = document.querySelectorAll(".playerNumber");

    // assign the correct colour to the card, i.e red or black, according to its suit
    if (playerSuit[playerSuit.length - 1].innerHTML === "❤️" || playerSuit[playerSuit.length - 1].innerHTML === "♦️"){
        playerNumber[playerNumber.length - 2].classList.add("card__content--red");
        playerNumber[playerNumber.length - 1].classList.add("card__content--red");
    } else {
        playerNumber[playerNumber.length - 2].classList.add("card__content--black");
        playerNumber[playerNumber.length - 1].classList.add("card__content--black");
    }

    checkScore();
    compareScore();
};

export const replaceHiddenCardForDealer = () => {
    const hiddenCard = document.querySelector(".card--cover");
    hiddenCard.style.display = "none";

    dealerSide.innerHTML = `
    <div class="card">
        <h3 class="card__content card__content--top dealerNumber">${dealer[0]}</h3>
        <h3 class="card__content card__content--middle dealerSuit">${getRandomSuit(suits)}</h3>
        <h3 class="card__content card__content--bottom dealerNumber">${dealer[0]}</h3>
    </div>` + dealerSide.innerHTML;

    const firstCardSuit = document.querySelector(".dealerSuit");
    const dealerNumber = document.querySelectorAll(".dealerNumber");

    if (firstCardSuit.innerHTML === "❤️" || firstCardSuit.innerHTML === "♦️"){
        dealerNumber[0].classList.add("card__content--red");
        dealerNumber[1].classList.add("card__content--red");
    } else {
        dealerNumber[0].classList.add("card__content--black");
        dealerNumber[1].classList.add("card__content--black");
    }
};

export const clearAll = () => {
    dealer = [];
    player = [];
    dealerSide.innerHTML = '<div class="card card--cover"></div>';
    playerSide.innerHTML = '';
};