const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is know a big red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
// const qsa = (els) => document.querySelectorAll(els);
// const allColors = qsa(".color");

// console.log(allColors);

// const allColorsArray = Array.from(allColors);

// const goodColor = allColorsArray.filter((node) => {
//   if (node.classList[1] === "good") {
//     return true;
//   }
//   return false;
// });
// console.log(goodColor);

// const badArray = Array.from(qsa(".bad"));
// const bad = badArray.map((item) => item.innerHTML);
// console.log(bad);