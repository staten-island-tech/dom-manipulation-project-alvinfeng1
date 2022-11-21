const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  removeButton: document.getElementById("remove-btn"),
  display: document.getElementById("display-card"),
  formInput: document.querySelectorAll("#form-input"),
  resetButton: document.getElementById("resetbutton"),
  typeInput: document.getElementById("type-input"),
  flavorInput: document.getElementById("flavor-input"),
  brandInput: document.getElementById("brand-input"),
};

// function getValues() {
//   console.log($("#form-imput").serializeArray());
//   Event.preventDefalut();
// }

DOMSelectors.button.addEventListener("submit", function () {
  Event.preventDefault();
  // let everything = document.querySelectorAll("form-imput");
  // console.log(everything);
  let imputs = Array.box;
  typeInput = imputs[1].value;
  flavorInput = imputs[2].value;
  brandInput = imputs[3].value;
  console.log(imputs);
});

function resetbutton() {
  DOMSelectors.brandInput.value = ``;
  DOMSelectors.flavorInput.value = ``;
  DOMSelectors.typeInput.value = ``;
}

function display() {
  h1 = DOMSelectors.typeInput.value;
  h2 = DOMSelectors.flavorInput.value;
  h3 = DOMSelectors.brandInput.value;
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class = "display-card"> 
    <h1>${h1}</h1>
    <br>
    <h2>${h2}</h2>
    <br>
    <h3>${h3}</h3>
    <br>
    <button class = "remove-btn"> Remove</button>
    </div>
       `
  );
}

// function destroy() {
//   const btn = Array.form(document.getElementByClassName("remove-button"));
//   btn.forEach((button) => {
//     button.addEventListener("click", function () {
//       this.parentElement.remove;
//     });
//   });
// }

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  // destroy();
  display();
  resetbutton();
});
