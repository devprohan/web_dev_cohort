const addTaskButton = document.getElementById("add-task-button");
const todoBoard = document.getElementById("todo-board");

addTaskButton.addEventListener("click", () => {
  const input = prompt("What is the task"); // by using prompt prompt bar pop up after click on add btn
  if (!input) return;
  const taskCard = document.createElement("p"); // ek paragraph tag bnaya uska name taskcard he
  taskCard.classList.add("item");
  taskCard.setAttribute("draggable", true);
  taskCard.innerText = input;

  taskCard.addEventListener("dragstart", () => {
    taskCard.classList.add("flying");
  });

  taskCard.addEventListener("dragend", () => {
    taskCard.classList.remove("flying");
  });

  todoBoard.appendChild(taskCard);
});

const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("flying");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("flying");
  });
});
allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flyingElement = document.querySelector(".flying");
    board.appendChild(flyingElement);
  });
});
