// const DOMSelectors = {
//   button: document.getElementById("btn"),
//   text: document.querySelector("#test"),
//   points: document.querySelectorAll(".point"),
//   box: document.getElementById("big-black-box"),
// };

// function backgroundAndText(background, text) {
//   background.style.backgroundColor = "red";
//   text.innerHTML = "this is know a big red box";
// }

// backgroundAndText(DOMSelectors.box, DOMSelectors.text);
const qsa = (els) => document.querySelectorAll(els);
const allColors = qsa(".color");

console.log(allColors);

const badColor = allColors.filter((node) => { if(node.classList[1] ===)})