"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

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

  // Når animationen er færdig, kaldes animationEnd()
  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd);
}

// Når animationen slutter
function animationEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  // Viser de rigtige hænder
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);

  showResultScreen();
}

//resultatsskærm bliver vist
function showResultScreen() {
  // Skjuler tekst først
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  if (userChoice === computerChoice) {
    drawText.classList.remove("hidden");
  }
  // Sten slår saks
  else if (userChoice === "rock" && computerChoice === "scissors") {
    winText.classList.remove("hidden");
  }
  // Saks slår papir
  else if (userChoice === "scissors" && computerChoice === "paper") {
    winText.classList.remove("hidden");
  }
  // Papir slår sten
  else if (userChoice === "paper" && computerChoice === "rock") {
    winText.classList.remove("hidden");
  }
  // computeren vinder
  else {
    loseText.classList.remove("hidden");
  }
}
