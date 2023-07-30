function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

function completeTask(button) {
    const taskText = button.previousElementSibling;
    taskText.classList.toggle("completed");
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
