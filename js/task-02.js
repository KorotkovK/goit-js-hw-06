const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Отримуємо список інгредієнтів
const ingredientsList = document.querySelector('#ingredients');

// Створюємо елементи <li> зі списку інгредієнтів та додаємо їх до списку
ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  ingredientsList.appendChild(listItem);
});
