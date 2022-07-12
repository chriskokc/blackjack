import { deckOfCard , suits , getRandomCard , getRandomSuit } from "./cards.js"

let dealer = [];
let player = [];
let dealerSide = document.querySelector(".game__dealer");
let playerSide = document.querySelector(".game__player");


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

export const startGame = () => {
    // get random cards for both dealer and player
    for (let i = 0; i < 2; i++) {
        dealer.push(getRandomCard(deckOfCard));
        player.push(getRandomCard(deckOfCard));
    }

    // display their cards on hand
    displayCards();

    compareScore();
};


const addScore = (cards) => {
    const score = cards.reduce((totalScore, cardValue) => {
        return totalScore + cardValue;
    });
    return score;
};

const getCardValue = (card) => {
    switch (card) {
        case "A":
            return 11;
        case "J":
        case "Q":
        case "K":
            return 10;
        default:
           return Number(card);
    }
}

const compareScore = () => {
    const dealerScoreArr = dealer.map((card) => {
        return getCardValue(card);
    });
    
    const playerScoreArr = player.map((card) => {
        return getCardValue(card);
    });

    const dealerScore = addScore(dealerScoreArr);
    const playerScore = addScore(playerScoreArr);

    console.log(`Dealer Score is ${dealerScore}.`);
    console.log(`Player Score is ${playerScore}.`);
};