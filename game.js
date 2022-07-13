import { dealer , player , deckOfCard , getRandomCard , distributeCardsToDealer , distributeCardsToPlayer , clearAll, replaceHiddenCardForDealer } from "./cards.js";
import { betAmount , modalBox, playerWinModalBox , dealerWinModalBox , drawModalBox } from "./script.js";

let amountOfBet = 10;
let dealerScore = 0;
let playerScore = 0;

export const startGame = () => {
    // show the amount of bet to the player
    betAmount.innerHTML += `£${amountOfBet}`;
    // distribute cards to dealer and player
    // hidden card for the dealer
    dealer.push(getRandomCard(deckOfCard));
    // displayed cards
    distributeCardsToDealer();
    distributeCardsToPlayer();
    distributeCardsToPlayer();
    // check if anyone got a blackjack 
    checkScore();
    checkBlackJack();
    // check if any of them got a pair of Ace, one Ace should be counted as 1 and the other to be counted as 11
    playerScore = adjustForAce(player, playerScore);
    dealerScore = adjustForAce(dealer, dealerScore);
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
};

export const checkScore = () => {
    const dealerScoreArr = dealer.map((card) => {
        return getCardValue(card);
    });
    
    const playerScoreArr = player.map((card) => {
        return getCardValue(card);
    });

    dealerScore = addScore(dealerScoreArr);
    playerScore = addScore(playerScoreArr);
};

const checkBlackJack = () => {
    if (dealerScore === 21 && dealer.includes("A") && dealer.length === 2) {
        endGame(dealerWinModalBox);
        replaceHiddenCardForDealer();
        amountOfBet -= 10;
    } else if (playerScore === 21 && player.includes("A") && player.length === 2) {
        endGame(playerWinModalBox);
        replaceHiddenCardForDealer();
        amountOfBet += 10;
    }
};

const adjustForAce = (anyPlayer, score) => {
    // cases for having an Ace
    if (score > 21 && anyPlayer.includes("A")) {
        score = score - 11 + 1;
    }
    return score;
};

export const compareScore = () => {
    playerScore = adjustForAce(player, playerScore);

    // check for bust
    if (playerScore > 21) {
        endGame(dealerWinModalBox);
        replaceHiddenCardForDealer();
        amountOfBet -= 10;
    }

    console.log(`Dealer deck: ${dealer}, and its score is: ${dealerScore}.`);
    console.log(`Player deck: ${player}, and its score is: ${playerScore}.`);
};

export const playerChooseStand = () => {
    // once the player stands, let the dealer draw card until its score > 16
    while (dealerScore < 16) {
        distributeCardsToDealer();
        const dealerScoreArr = dealer.map((card) => {
            return getCardValue(card);
        });
        dealerScore = addScore(dealerScoreArr);
    }

    dealerScore = adjustForAce(dealer, dealerScore);

    // check for bust
    if (dealerScore > 21) {
        endGame(playerWinModalBox);
        replaceHiddenCardForDealer();
        amountOfBet += 10;
    } else {
         // final score comparsion
        if (dealerScore > playerScore) {
            endGame(dealerWinModalBox);
            replaceHiddenCardForDealer();
            amountOfBet -= 10;
        } else if (dealerScore < playerScore) {
            endGame(playerWinModalBox);
            replaceHiddenCardForDealer();
            amountOfBet += 10;
        } else if (dealerScore == playerScore) {
            endGame(drawModalBox);
            replaceHiddenCardForDealer();
        }
    }
};

export const resetGame = () => {
    modalBox.forEach(eachBox => {
        eachBox.style.display = "none";
    });
    betAmount.innerHTML = "Your bet: ";
    clearAll();
};

const endGame = (modalBox) => {
    modalBox.style.display = "block";
};