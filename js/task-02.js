const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  
  li.classList.add('item');
  
  li.textContent = ingredient;
  
  ingredientsList.appendChild(li);
});