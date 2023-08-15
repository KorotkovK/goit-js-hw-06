
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateName(event) {
    const inputText = event.target.value.trim();
    if (inputText === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputText;
    }
}

nameInput.addEventListener('input', updateName);
