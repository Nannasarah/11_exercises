"use strict";

// Finder <div id="tal"> i HTML'en
const div = document.getElementById("tal");

getJSON();

// Kører funktionen igen hver 10. sekund
setInterval(getJSON, 10000);

// Asynkron funktion, der henter data fra API'et
async function getJSON() {
  // Henter URL data
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  // Konverter svaret til JSON-objekt
  const data = await response.json();
  // Sæt antallet i køen ind i diven
  div.textContent = data.inQueue;

  // Lav en tilfældig farve til baggrunden
  const farve = Math.floor(Math.random() * 360);
  //body baggrund til en ny HSL-farve
  document.body.style.backgroundColor = `hsl(${farve}, 70%, 50%)`;
}
