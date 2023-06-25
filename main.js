const list = document.querySelector('.list');
const button = document.querySelector('.submitBtn');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.input').value;
  const item = document.createElement('li');
  item.textContent = `${input}`;
  list.appendChild(item);
});
