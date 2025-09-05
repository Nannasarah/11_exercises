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
  let foundBadWord = false;

  curseWords.forEach((word) => {
    if (text.includes(word.bad)) {
      foundBadWord = true;
      text = text.replaceAll(word.bad, `<span class="highlight">${word.good}</span>`);
    }
  });
  if (foundBadWord) {
    p.innerHTML = text;
  } else {
    alert("Det er allerede Safe For Work");
  }
}

// let str = "it always seems impossible until it's done.";
// const strArr = str.split(" ");
// // console.log(strArr);
// // console.log(strArr.join("")); //fjerner mellemrum
// str = str.replaceAll("impossible", "possible");
// console.log(str);
