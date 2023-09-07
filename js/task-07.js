const rangeInput = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

rangeInput.addEventListener("input", changeSize);

function changeSize(event) {
  const fontSize = rangeInput.value;
  spanElement.style.fontSize = `${fontSize}px`;
}
