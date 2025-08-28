("use strict");
let computerChoice;

const hoejBtn = document.querySelector("#hoej");
const lavBtn = document.querySelector("#lav");
const rightBtn = document.querySelector("#right");
const startBtn = document.querySelector("#start");
const h3 = document.querySelector("#h3");

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
  //Nednfor gør jeg at man ikke kan trykke på knapperne før man har trykket start.
  document.querySelector("#hoej").disabled = true;
  document.querySelector("#lav").disabled = true;
  document.querySelector("#right").disabled = true;
  document.querySelector("#start").disabled = false;
}

function clickStart() {
  console.log("click start");
  const min = 0;
  const max = 100;
  mid = 50;
  computerChoice = mid;

  //nedenfor gemmer den h3 der siger "rigtigt"
  h3.hidden = true;

  //Her skriver den ud i console hvad computeren har valgt

  console.log("computerChoice", computerChoice);
  //Her gør jeg at start knappen ikke kan trykkes på, men nu kan man trykke på de ande
  document.querySelector("#start").disabled = true;
  document.querySelector("#hoej").disabled = false;
  document.querySelector("#lav").disabled = false;
  document.querySelector("#right").disabled = false;

  visGaet();
}

function visGaet() {
  computerChoice = Math.floor((min + max) / 2);
  console.log("computerChoice", computerChoice);

  h2.textContent = `Jeg gætter på ${computerChoice}`;
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
  console.log("rigtigt");
  h3.textContent = "Rigtigt!";
  //den fjerner hidden på h3 så man kan se "rigtigt"
  h3.hidden = false;
  reset();
}

function reset() {
  computerChoice = 0;
  min = 0;
  max = 101;
  sidenvises();
}
