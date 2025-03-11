let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
  // get the list element from the DOM
  if(getLocalStorage("tasks")) {
    tasks = getLocalStorage("tasks");
  }
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
    if(getLocalStorage("tasks")) {
        tasks = getLocalStorage("tasks");
    }
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // add it to our arrays tasks
  tasks.push({ detail: task, completed: false });
  // render out the list
  
  setLocalStorage("tasks", tasks);
  renderTasks(tasks);
}

function removeTask(taskElement) {
    if(getLocalStorage("tasks")) {
        tasks = getLocalStorage("tasks");
    }
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
    setLocalStorage("tasks", tasks);
  taskElement.remove();
}

function completeTask(taskElement) {
    if(getLocalStorage("tasks")) {
        tasks = getLocalStorage("tasks");
    }
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
    setLocalStorage("tasks", tasks);
  console.log(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

const setUser = () => {
    if(localStorage.getItem("todo-user")) {
        document.querySelector("p.user").innerText = localStorage.getItem("todo-user");
    }
    if(document.querySelector("#user").value) {
        const name = document.querySelector("#user").value;
        localStorage.setItem("todo-user", name);
        document.querySelector("p.user").innerText = name;
    }
}

const setLocalStorage = (key, data) => {
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}

const getLocalStorage = key => {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
document.querySelector("#submitUser").addEventListener("click", setUser);

// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);
setUser();