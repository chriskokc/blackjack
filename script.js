import { distributeCardsToPlayer } from "./cards.js";
import { startGame , compareScore } from "./game.js";

const startBtn = document.querySelector(".bet__btn");
const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");

startBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", distributeCardsToPlayer);
standBtn.addEventListener("click", compareScore);







