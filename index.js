const DOMSelectors = {
  button: document.getElementById(`btn`),
  box: document.getElementById(`.text-box`),
  form: document.querySelectorAll(`form`),
  removeButton: document.getElementById(`remove-btn`),
  display: document.getElementById(`display-img`),
  formInput: document.querySelectorAll(`#form-input`),
  flavor: document.getElementById(`flavor`),
  type: document.getElementById(`type`),
  brand: document.getElementById(`brand`),
  resetButton: document.getElementById(`resetbutton`),
};

// function getValues() {
//   console.log($("#form-imput").serializeArray());
//   Event.preventDefalut();
// }

DOMSelectors.button.addEventListener("submit", function () {
  e.preventDefault();
  // let everything = document.querySelectorAll("form-imput");
  // console.log(everything);
  let imputs = Array.box;
  snack.type = imputs[1].value;
  snack.flavor = imputs[2].value;
  snack.brand = imputs[3].value;
  console.log(imputs);
});

DOMSelectors.resetButton.addEventListener("submit", function () {
  Document.getElementById("form").reset();
});

function display() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `
    <h2>${snack.type}</h2>
    <br>
    <h2>${snack.flavor}</h2>
    <br>
    <h2>${snack.brand}</h2>
    <br>
    `
  );
}

  DOMSelectors.removeButton.addEventListener("removebuttton", function () {
    let image = DOMSelectors.display.value;
    delete image
  });
