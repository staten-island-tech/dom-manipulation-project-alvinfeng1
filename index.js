const DOMSelectors = {
  button: document.getElementById("btn"),
  form: document.getElementById("form"),
  display: document.getElementById("display-card"),
  formInput: document.querySelectorAll("#form-input"),
  typeInput: document.getElementById("type-input"),
  flavorInput: document.getElementById("flavor-input"),
  brandInput: document.getElementById("brand-input"),
};

DOMSelectors.button.addEventListener("submit", function () {
  let imputs = Array.box;
  typeInput = imputs[1].value;
  flavorInput = imputs[2].value;
  brandInput = imputs[3].value;
  console.log(imputs);
});

function clear() {
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
    <h2> Type:${h1}</h2>
    <br>
    <h2> Flavor:${h2}</h2>
    <br>
    <h2> Brand:${h3}</h2>
    <br>
    <button type="button" class="remove-btn">Remove</button>
    </div>
       `
  );
}

function destroy() {
  const btn = Array.from(document.getElementsByClassName("remove-btn"));
  btn.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove;
    });
  });
}

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  display();
  destroy();
  clear();
});
