("use strict");

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 101);
let brugerGuess;

btn.addEventListener("click", klik_btn);
function klik_btn() {
  brugerGuess = input.value;

  console.log("KLIK", computerNum);
  let feedbackText;
  if (brugerGuess < computerNum) {
    feedbackText = "For lavt!";
  } else if (brugerGuess > computerNum) {
    feedbackText = "For Højt!";
  } else {
    feedbackText = "RIGTIGT!";
  }

  h2.textContent = feedbackText;
  console.log(feedbackText);
}
