const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const todo=document.getElementById("todo")
const add=document.getElementById("add");
const clear=document.getElementById("clear")

// local storage
let len=localStorage.length;
for(let i1=0;i1<len;i1++){
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = localStorage.getItem(i1);

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");

  });
  todoLane.appendChild(newTask);
}

let i=0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value){ alert("There is nothing in input box");
     return }

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);
  localStorage.setItem(i++, value);
  input.value = "";
});

clear.addEventListener("click",(e)=>{
  localStorage.clear();
  window.location.reload();
})