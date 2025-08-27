"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventlistenersToButtons();
function addEventlistenersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

//Alle knapper får en funktion
function rockKlik() {
  console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}
function paperKlik() {
  console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}
function scissorsKlik() {
  console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

//Computeren træffer et valg
function computerGuess() {
  const choise_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choise_arr[randomNum];
  //Her skriver den ud i console hvad computeren har valgt
  console.log("computerChoice", computerChoice);
  //Her skriver den ud i console hvad man ghar valgt
  console.log("userChoice", userChoice);

  animationStarter();
}

function animationStarter() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}
//evalution af resultatet
function animationEnd() {}
//resultatsskærm bliver vist
function showResultScreen() {}
