const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

refs.incrementBtn.addEventListener("click", incrementValue);

function incrementValue(event) {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

refs.decrementBtn.addEventListener("click", decrementValue);

function decrementValue(event) {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
