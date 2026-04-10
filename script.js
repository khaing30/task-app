let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.textContent = task.text;
    if (task.done) {
      li.style.textDecoration = "line-through";
    }

    li.onclick = () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value === "") return;

  tasks.push({ text: input.value, done: false });
  input.value = "";

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
