"use strict";

// Exporter funktionen så den kan bruges i animalbase.js
export function addStars(allAnimals) {
  // Find alle <td> elementer, der har data-field="star".
  document.querySelectorAll("[data-field='star']").forEach((starElement) => {
    // Vis korrekt stjerne: fyldt ⭐ hvis animal.star er true, ellers tom ☆
    if (animal.star) {
      starElement.textContent = "⭐"; // hvis animal.star er true, vis fyldt stjerne
    } else {
      starElement.textContent = "☆"; // hvis animal.star er false, vis tom stjerne
    }

    starElement.style.cursor = "pointer";

    // Tilføj klik-event til stjernen og at den ændrer udseende efter overstående ifsætning
    starElement.addEventListener("click", () => {
      // Skift animal.star mellem true og false
      if (animal.star) {
        animal.star = false; // hvis stjernen var fyldt, gør den tom
      } else {
        animal.star = true; // hvis stjernen var tom, gør den fyldt
      }

      // Viser den rigtige stjerne ud fra ifsætningen
      starElement.textContent = animal.star ? "⭐" : "☆";
    });
  });
}
