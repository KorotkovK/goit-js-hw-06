
const validationInput = document.getElementById('validation-input');

const requiredLength = Number(validationInput.getAttribute('data-length'));


function checkInputLength() {
    const inputValue = validationInput.value;
    if (inputValue.length === requiredLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}

validationInput.addEventListener('blur', checkInputLength);
