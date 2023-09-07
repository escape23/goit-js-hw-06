const refs = {
  input: document.querySelector("#name-input"),
  nameHeading: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameHeading.textContent = event.currentTarget.value;
}
