import { distributeCardsToPlayer } from "./cards.js";
import { startGame , playerChooseStand , resetGame } from "./game.js";

const startBtn = document.querySelector(".bet__btn");
const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");
export const modalBox = document.querySelectorAll(".modalBox");
export const playerWinModalBox = document.querySelector("#player-win");
export const dealerWinModalBox = document.querySelector("#dealer-win");
export const drawModalBox = document.querySelector("#draw");
const playerWinClosing = document.querySelector("#player-win-closing");
const dealerWinClosing = document.querySelector("#dealer-win-closing");
const drawClosing = document.querySelector("#draw-closing");

startBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", distributeCardsToPlayer);
standBtn.addEventListener("click", playerChooseStand);
playerWinClosing.addEventListener("click", resetGame);
dealerWinClosing.addEventListener("click", resetGame);
drawClosing.addEventListener("click", resetGame);




