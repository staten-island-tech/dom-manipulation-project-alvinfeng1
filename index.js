const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById(".text-box"),
  form: document.querySelectorAll("form"),
  removeButton: document.getElementById("remove-btn"),
  display: document.getElementById("display-img"),
};

DOMSelectors.button.("button", function () {
  e.preventDefault();
  let imput = DOMSelectors.box.value;
  //create object from values
  console.log(imput);
});