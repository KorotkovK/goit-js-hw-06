const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', (event) => {
  const fontSizeValue = event.target.value;
  textElement.style.fontSize = `${fontSizeValue}px`;
});
