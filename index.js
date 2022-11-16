const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById(".text-box"),
  form: document.querySelectorAll("form"),
  removebuttton: getElementById("remove btn"),
  display: getElementById("display-img"),
};

DOMSelectors.button.addEventListener("button", function () {
  Event.preventDefault(refresh);
  let imput = DOMSelectors.box.value;
  console.log(imput);
});

DOMSelectors.removebuttton.addEventListener("removebuttton", function () {
  let image = DOMSelectors.display.value;
});
