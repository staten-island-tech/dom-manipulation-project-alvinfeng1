const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("box"),
  points: document.querySelectorAll(".point"),
};

function styling(document, text) {
  document.body.style.backgroundColor = "red";
  text.textContent = "this is a different colored box";
  text.style.fontSize = "40px";
  text.style.color = "white";
}

// function changeLi() {
//   let pointIndex = 1;
//   DOMSelectors.points.forEach((point) => {
//     point.addEventListener("click", function () {
//       point.textConent = `hello i am a point ${pointIndex}`;
//       pointIndex++;
//     });
//   });
// }
// changeLi();

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
