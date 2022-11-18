const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById(".text-box"),
  form: document.querySelectorAll("form"),
  removeButton: document.getElementById("remove-btn"),
  display: document.getElementById("display-img"),
  formInput: document.querySelectorAll("#form-input")
};

function getValues() {
  console.log($('#form-imput').serializeArray());
  Event.preventDefalut()
}

DOMSelectors.button.addEventListener("click", function () {
  e.preventDefault();
  let everything = document.querySelectorAll("form-imput") 
  let imputs = Array.box;
  console.log(imputs);
  snack.type = imputs[1].value
  snack.flavor = imputs[2].value
  snack.brand = imputs[3].value
  console.log(everything)
});
