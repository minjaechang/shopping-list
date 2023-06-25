const list = document.querySelector('.list');
const button = document.querySelector('.submitBtn');
const form = document.querySelector('.form');

let deleteBtns;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.input');
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.textContent = input.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.addEventListener('click', () => {
    const item = deleteBtn.parentNode;
    item.remove();
  });

  item.append(span);
  item.append(deleteBtn);
  list.append(item);

  form.reset();
});
