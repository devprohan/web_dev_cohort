
const addbtn = document.getElementById("add-button");
const todoinput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todoItems");

addbtn.addEventListener("click", () => {
  const value = todoinput.value;

  const li = document.createElement("li");
  li.innerText = value;

  const delelement = document.createElement('button')
  delelement.innerText = 'x';
    delelement.addEventListener('click', () => {
        li.remove()
    })

  li.appendChild(delelement)

  const allDelete = document.getElementById("all_delte");
  allDelete.innerText = 'All Remove';

  allDelete.addEventListener('click', () => {
    todoItemsContainer.remove();
  })

  todoItemsContainer.appendChild(li);
});
