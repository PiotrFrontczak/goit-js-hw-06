let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const counterValueElem = document.getElementById('value');

function updateCounterValue() {
  counterValueElem.textContent = counterValue;
}

function decrement() {
  counterValue--;
  updateCounterValue();
}

function increment() {
  counterValue++;
  updateCounterValue();
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

updateCounterValue();