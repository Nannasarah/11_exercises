//Tilfældigt tal
console.log("Tilfældigt tal " + Math.round(Math.random() * 100));
document.querySelector("#p1").textContent = "Tilfældigt tal " + Math.round(Math.random() * 100);

//Gæt et tal

window.addEventListener("load", sidenVises);
let tal = Math.round(Math.random() * 101);
console.log("Gæt et tal " + tal);

function sidenVises() {
  document.querySelector("#check").addEventListener("click", clickcheck);
}

function clickcheck() {
  let gæt = Number(document.querySelector("#inputTal").value);

  if (gæt === tal) {
    console.log("rigtigt gættet");
    document.querySelector("#p3").textContent = "Rigtigt!";
  } else if (gæt < tal) {
    document.querySelector("#p3").textContent = "For lavt!";
  } else if (gæt > tal) {
    document.querySelector("#p3").textContent = "For højt!";
  }
}
//I Undervisningen
console.log("Hjælp i undervisning");
console.log("Tilfældigt tal " + Math.random() * 10);
//for at gøre det til et tal og ikke en brøk,  ganger jeg med 10 bagpå, det bestemmer også at det er mellem 1 og 10

console.log("Tilfældigt tal " + Math.floor(Math.random() * 10));
//så runder jeg op eller ned for at få et helt tal. ved at sætte dette foran:  Math.floor, cet her runder ned af.

console.log("Tilfældigt tal " + Math.ceil(Math.random() * 10));
// man kan også skrive Math.Ceil, fo at runde op.

console.log("Tilfældigt tal " + Math.round(Math.random() * 10));
// Math.round, så runder den bare det som man normalt ville runde tal af
