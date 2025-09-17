// const storageTheme = localStorage.getItem("storageTheme");
// console.log("storageTheme", storageTheme);

//skifter tema
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".theme");
  const body = document.body;

  select.addEventListener("change", (event) => {
    body.setAttribute("data-theme", event.target.value);
  });
});

//klaus
// document.querySelector("#theme_select").addEventListener("change", thChange);
// if (storageTheme === null) {
// } else {
//   document.querySelector("body").dataset.theme = storageTheme;
// }

// function thChange(evt) {
//   const chosenTheme = evt.target.value;
//   console.log("chosenTheme", chosenTheme);
//   localStorage.setItem("storageTheme", chosenTheme);
//   document.querySelector("body").dataset.theme = chosenTheme;
// }

//gemmer i local storage
