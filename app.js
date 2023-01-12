const toDoList = [];

const form = document.querySelector('.addForm');
const searchInput = document.querySelector('.searchInput');
const addInput = document.querySelector('.addInput');
const ul = document.querySelector('ul');
const liItems = document.getElementsByClassName('task');

const numberOfTasks = () => {
    const taskNumber = document.querySelector('h1 span');
    taskNumber.textContent = toDoList.length;
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

const addTask = (e) => {
    e.preventDefault();
    const inputText = addInput.value;
    const newTask = document.createElement('li');
    if (inputText == "") {
        alert("Pole nie może być puste")
        return;
    }
    newTask.className = "task";
    newTask.innerHTML = inputText + "<button>Usuń</button>"
    toDoList.push(newTask);
    renderList();
    addInput.value = "";
    numberOfTasks();
    newTask.addEventListener("click", removeTask);
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    numberOfTasks();
    renderList();
}

const searchTask = () => {
    const searchText = searchInput.value;
    let tasks = toDoList;
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task))
    numberOfTasks();
}

form.addEventListener("submit", addTask);
searchInput.addEventListener("input", searchTask);