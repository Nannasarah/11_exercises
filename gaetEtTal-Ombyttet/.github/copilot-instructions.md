# Copilot Instructions for gaetEtTal-Ombyttet

This project is a simple browser-based guessing game implemented in vanilla JavaScript and HTML. The codebase is minimal, with all logic in `script.js` and UI in `index.html`.

## Architecture Overview

- **UI**: Defined in `index.html` with buttons for user interaction (`#hoej`, `#lav`, `#right`, `#start`) and a heading for feedback (`#h2`).
- **Game Logic**: All JavaScript is in `script.js`. The game starts when the user clicks the `#start` button, triggering the main logic.
- **No build tools, tests, or external dependencies** are present. All code runs directly in the browser.

## Key Patterns & Conventions

- **Event-driven**: Button clicks are handled via `addEventListener`. The main entry point is the `sidenvises` function, which sets up event listeners on page load.
- **Global State**: Game state (e.g., `computerChoice`, `userChoice`) is managed via global variables. There is no module system or encapsulation.
- **Randomization**: The computer's choice is selected using `Math.random()` and an array (`choise_arr`).
- **Console Logging**: Debug output is printed to the browser console for both computer and user choices.
- **No CSS or advanced UI frameworks**: All styling and layout are default HTML.

## Developer Workflow

- **Edit and reload**: Make changes to `script.js` or `index.html`, then reload the browser to see updates.
- **Debugging**: Use browser DevTools (Console, Elements) to inspect state and debug issues.
- **No build or test commands**: There are no scripts or automation; all work is manual and direct.

## Integration Points

- **No external APIs or libraries**: The project is fully self-contained.
- **All logic is client-side**: No server or backend integration.

## Example: Adding a New Button

1. Add the button to `index.html`.
2. Add an event listener in `script.js` within `sidenvises`.
3. Implement the button's logic in a new function in `script.js`.

## File Reference

- `index.html`: UI structure and script inclusion.
- `script.js`: All game logic and event handling.

---

If any conventions or workflows are unclear, please provide feedback so this guide can be improved.
