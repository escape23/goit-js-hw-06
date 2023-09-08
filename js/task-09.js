function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector("button.change-color");
const spanText = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  spanText.textContent = color;
});
