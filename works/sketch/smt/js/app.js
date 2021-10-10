let sideNav = document.querySelector(".sidebar")
let navToggle = document.getElementById("nav_toggle");
navToggle.onclick = function () {
    navToggle.classList.toggle("active");
    sideNav.classList.toggle("responsive");
    document.body.classList.toggle("responsive");
}

const body = document.querySelector('.products__dl');
document.querySelector('.toggle__dl').onclick = function() {
    body.classList.toggle('light')
}

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.button-OK');
const todoList = document.querySelector('.todo-list');

// Event Listener
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
    event.preventDefault(); //убрать обычное поведение
    //создать див
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //создать элемент(ли) внутри дива
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //сохранить его в стейт
    saveLocalTodos(todoInput.value);


    const completedButton = document.createElement("button");
    completedButton.innerText = "Complete";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerText = "Delete";
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        
    }
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //создать элемент(ли) внутри дива
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);



        const completedButton = document.createElement("button");
        completedButton.innerText = "Complete";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerText = "Delete";
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
