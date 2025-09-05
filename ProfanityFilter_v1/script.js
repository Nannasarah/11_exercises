"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
const p = document.getElementById("text");

document.querySelector("button").addEventListener("click", click);

function click() {
  let text = p.innerHTML;
  let foundBadWord = false; // Bliver true, hvis vi finder et forbudt ord
  // Gennemgår hvert ord i curseWords-listen
  curseWords.forEach((word) => {
    if (text.includes(word.bad)) {
      foundBadWord = true; // Erstatter alle forekomster med den "gode" version
      //pakker det ind i en <span class="highlight"> så vi kan style det i CSS
      text = text.replaceAll(word.bad, `<span class="highlight">${word.good}</span>`);
    }
  });
  // Hvis vi fandt mindst ét forbudt ord, opdaterer vi teksten i <p>
  if (foundBadWord) {
    p.innerHTML = text;
  } else {
    // Hvis teksten allerede er good viser vi en besked
    alert("Det er allerede Safe For Work");
  }
}

// let str = "it always seems impossible until it's done.";
// const strArr = str.split(" ");
// // console.log(strArr);
// // console.log(strArr.join("")); //fjerner mellemrum
// str = str.replaceAll("impossible", "possible");
// console.log(str);
