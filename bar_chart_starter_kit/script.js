"use strict";
//Hent ul elementet med alle li elementerne i, altså søjlerne
const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", Math.round(Math.random() * 101));
// list.appendChild(li);

//Kald funktionen hver sekund
setInterval(genererSøjle, 1000);

//Funktion der genererer søjle
function genererSøjle() {
  console.log("genererSøjle");
  const li = document.createElement("li");
  //Mathrandom giver et tal mellem 0 og 100, og bestmmer søjlens højde
  li.style.setProperty("--height", Math.round(Math.random() * 101));
  list.appendChild(li);
}
//Hvis der er over 20 søjler, så fjern den første med array.shift()
setInterval(() => {
  //array med alle søjlerne bliver defineret
  const alleSøjler = document.querySelectorAll("li");
  //Hvis der er over 20 søjler
  if (alleSøjler.length > 20) {
    //Fjern den første søjle, altså index 0 i arrayet
    alleSøjler[0].remove();
  }
});
