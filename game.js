import { dealer , player , deckOfCard , getRandomCard , distributeCardsToDealer , distributeCardsToPlayer, dealerSide, playerSide } from "./cards.js";
import { modalBox, playerWinModalBox , dealerWinModalBox } from "./script.js";

export const startGame = () => {
    // distribute cards to dealer and player

    // hidden card for the dealer
    dealer.push(getRandomCard(deckOfCard));
    // displayed cards
    distributeCardsToDealer();
    distributeCardsToPlayer();
    distributeCardsToPlayer();

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

export const compareScore = () => {
    const dealerScoreArr = dealer.map((card) => {
        return getCardValue(card);
    });
    
    const playerScoreArr = player.map((card) => {
        return getCardValue(card);
    });

    let dealerScore = addScore(dealerScoreArr);
    let playerScore = addScore(playerScoreArr);

    // check for blackjack
    if (dealerScore === 21 && dealer.includes("A")) {
        endGame(dealerWinModalBox);
    } else if (playerScore === 21 && player.includes("A")) {
        endGame(playerWinModalBox);
    }

    // check for bust
    if (playerScore > 21) {
        endGame(dealerWinModalBox);
    }

    if (dealerScore > 21) {
        endGame(playerWinModalBox);
    }

    // cases for having an Ace
    if (dealerScore > 21 && dealerScoreArr.includes(11)) {
        dealerScoreArr.splice(dealerScoreArr.indexOf(11), 1);
        dealerScoreArr.push(1);
        dealerScore = dealerScore - 11 + 1;
    }

    if (playerScore > 21 && playerScoreArr.includes(11)) {
        playerScoreArr.splice(playerScoreArr.indexOf(11), 1);
        playerScoreArr.push(1);
        playerScore = playerScore - 11 + 1;
    }

    console.log(`Deal deck: ${dealer}, Dealer number deck: ${dealerScoreArr} and its score is: ${dealerScore}.`);
    console.log(`Player deck: ${player}, Player number deck: ${playerScoreArr} and its score is: ${playerScore}.`);

};

export const resetGame = () => {
    console.log("Button got clicked");
    modalBox.forEach(eachBox => {
        eachBox.style.display = "none";
    });
    dealerSide.innerHTML = '<div class="card card--cover"></div>';
    playerSide.innerHTML = '';
}

const endGame = (modalBox) => {
    modalBox.style.display = "block";
};