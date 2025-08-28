("use strict");
let computerChoice;

const hoejBtn = document.querySelector("#hoej");
const lavBtn = document.querySelector("#lav");
const rightBtn = document.querySelector("#right");
const startBtn = document.querySelector("#start");

hoejBtn.addEventListener("click", hoejKlik);
lavBtn.addEventListener("click", lavKlik);
rightBtn.addEventListener("click", rightKlik);
startBtn.addEventListener("click", clickStart);

let min = 0;
let max = 101;

window.addEventListener("load", sidenvises);
console.log("siden vises");

function sidenvises() {
  document.querySelector("#start").addEventListener("click", clickStart);
}

function clickStart() {
  console.log("click start");
  const min = 0;
  const max = 100;
  mid = 50;
  computerChoice = mid;
  //Her skriver den ud i console hvad computeren har valgt
  console.log("computerChoice", computerChoice);
  visGaet();
}

function visGaet() {
  computerChoice = Math.floor((min + max) / 2);
  console.log("computerChoice", computerChoice);

  h2.textContent = `jeg gætter på ${computerChoice}`;
}

//Alle knapper får en funktion
function hoejKlik() {
  console.log("for højt");
  max = computerChoice;

  clickStart();
}
function lavKlik() {
  console.log("for lavt");
  min = computerChoice;

  clickStart();
}
function rightKlik() {
  computerChoice === userChoice;
  console.log("rigtigt");
  reset();
  h2.textContent = "Jeg gættede rigtigt!";
}

function reset() {
  computerChoice = 0;
}
