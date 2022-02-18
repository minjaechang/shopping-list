const items = document.querySelector(".items");
const input = document.querySelector(".form__input");
const addBtn = document.querySelector(".form__button");

// enter text into input area
function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(text) {
  const item = document.createElement("li");
  item.setAttribute("class", "item");

  const description = document.createElement("div");
  description.setAttribute("class", "item__description");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(item);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "item__divider");

  description.appendChild(name);
  description.appendChild(deleteBtn);

  item.appendChild(description);
  item.appendChild(divider);

  return item;
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  onAdd();
});
