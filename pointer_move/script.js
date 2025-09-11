const div = document.querySelector("#container");

window.addEventListener("mousemove", function (colorchanger) {
  const procent = (colorchanger.clientX / window.innerWidth) * 100;
  div.style.setProperty("--lightness", `${procent}%`);
});
