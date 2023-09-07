const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    event.currentTarget.value = "";
    return;
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
    event.currentTarget.value;
  }
}
