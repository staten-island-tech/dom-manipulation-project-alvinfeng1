const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("#text-box"),
  form: document.querySelectorAll("form"),
};

DOMSelectors.button.addEventListener("sumbit", function () {
  Event.preventDefault(refresh);
  let imput = DOMSelectors.box.value;
  console.log(imput);
});

console.log;
