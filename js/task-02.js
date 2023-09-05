const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
})

listEl.append(...items);