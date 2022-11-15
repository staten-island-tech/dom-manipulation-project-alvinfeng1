const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("box"),
  points: document.querySelectorAll(".point"),
  imput: document.querySelector("#input"),
  form: document.querySelectorAll("#form"),
};

DOMSelectors.button.addEventListener("sumbit", function () {
  Event.preventDefault(refresh);
  let imput = DOMSelectors.box.value;
  console.log(imput);
});
