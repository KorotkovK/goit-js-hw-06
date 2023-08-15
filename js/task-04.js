
const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let currentValue = 0;

function updateCounter(value) {
    counterValue.textContent = value;
}

decrementButton.addEventListener('click', () => {
    currentValue -= 1;
    updateCounter(currentValue);
});

incrementButton.addEventListener('click', () => {
    currentValue += 1;
    updateCounter(currentValue);
});
updateCounter(currentValue);
