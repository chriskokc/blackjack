import { distributeCardsToPlayer } from "./cards.js";
import { startGame , compareScore , resetGame } from "./game.js";

const startBtn = document.querySelector(".bet__btn");
const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");
export const modalBox = document.querySelectorAll(".modalBox");
export const playerWinModalBox = document.querySelector("#player-win");
export const dealerWinModalBox = document.querySelector("#dealer-win");
const playerWinClosing = document.querySelector("#player-win-closing");
const dealerWinClosing = document.querySelector("#dealer-win-closing");

startBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", distributeCardsToPlayer);
standBtn.addEventListener("click", compareScore);
playerWinClosing.addEventListener("click", resetGame);
dealerWinClosing.addEventListener("click", resetGame);




