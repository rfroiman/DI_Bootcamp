const taskForm =
  document.getElementById("taskForm");

const taskInput =
  document.getElementById("taskInput");

const listTasks =
  document.querySelector(".listTasks");

const clearAllButton =
  document.getElementById("clearAll");


// -----------------------------
// ARRAY OF TASKS
// -----------------------------

const tasks = [];


// We use this variable so every task
// keeps a unique ID even after deleting
// other tasks.

let nextTaskId = 0;


// -----------------------------
// UPDATE CLEAR BUTTON
// -----------------------------

function updateClearButton() {

  if (tasks.length > 0) {

    clearAllButton.style.display = "block";

  }

  else {

    clearAllButton.style.display = "none";

  }

}


// -----------------------------
// ADD TASK
// -----------------------------

function addTask(event) {

  event.preventDefault();


  const taskText =
    taskInput.value.trim();


  // Check if input is empty

  if (taskText === "") {

    alert("Please enter a task");

    return;

  }


  // Create task object

  const newTask = {

    task_id: nextTaskId,

    text: taskText,

    done: false

  };


  // Increase ID for next task

  nextTaskId++;


  // Add task to array

  tasks.push(newTask);


  // -----------------------------
  // CREATE TASK DIV
  // -----------------------------

  const taskDiv =
    document.createElement("div");


  taskDiv.classList.add("task");


  // Add data-task-id

  taskDiv.dataset.taskId =
    newTask.task_id;


  // -----------------------------
  // DELETE BUTTON
  // -----------------------------

  const deleteButton =
    document.createElement("button");


  deleteButton.classList.add(
    "deleteButton"
  );


  deleteButton.innerHTML =
    '<i class="fa-solid fa-xmark"></i>';


  deleteButton.addEventListener(
    "click",
    deleteTask
  );


  // -----------------------------
  // CHECKBOX
  // -----------------------------

  const checkbox =
    document.createElement("input");


  checkbox.type = "checkbox";


  checkbox.addEventListener(
    "change",
    doneTask
  );


  // -----------------------------
  // LABEL
  // -----------------------------

  const label =
    document.createElement("label");


  label.textContent =
    newTask.text;


  // Add elements to task

  taskDiv.appendChild(
    deleteButton
  );

  taskDiv.appendChild(
    checkbox
  );

  taskDiv.appendChild(
    label
  );


  // Add task to DOM

  listTasks.appendChild(
    taskDiv
  );


  // Clear text input

  taskInput.value = "";


  // Show Clear All button

  updateClearButton();


  console.log(tasks);

}


// -----------------------------
// DONE TASK
// BONUS I
// -----------------------------

function doneTask(event) {

  const checkbox =
    event.target;


  const taskDiv =
    checkbox.parentElement;


  const taskId =
    Number(
      taskDiv.dataset.taskId
    );


  // Find task inside array

  const task =
    tasks.find(
      item =>
        item.task_id === taskId
    );


  if (task) {

    task.done =
      checkbox.checked;

  }


  // Change appearance in DOM

  if (checkbox.checked) {

    taskDiv.classList.add(
      "done"
    );

  }

  else {

    taskDiv.classList.remove(
      "done"
    );

  }


  console.log(tasks);

}


// -----------------------------
// DELETE ONE TASK
// BONUS II
// -----------------------------

function deleteTask(event) {

  const deleteButton =
    event.currentTarget;


  const taskDiv =
    deleteButton.parentElement;


  const taskId =
    Number(
      taskDiv.dataset.taskId
    );


  // Find task index

  const taskIndex =
    tasks.findIndex(
      item =>
        item.task_id === taskId
    );


  // Remove from array

  if (taskIndex !== -1) {

    tasks.splice(
      taskIndex,
      1
    );

  }


  // Remove from DOM

  taskDiv.remove();


  // Hide Clear All if array is empty

  updateClearButton();


  console.log(tasks);

}


// -----------------------------
// CLEAR ALL TASKS
// -----------------------------

function clearAllTasks() {

  // Remove all tasks from array

  tasks.splice(
    0,
    tasks.length
  );


  // Remove all tasks from DOM

  listTasks.innerHTML = "";


  // Hide Clear All button

  updateClearButton();


  console.log(tasks);

}


// -----------------------------
// EVENTS
// -----------------------------

taskForm.addEventListener(
  "submit",
  addTask
);


clearAllButton.addEventListener(
  "click",
  clearAllTasks
);


// Make sure button starts hidden

updateClearButton();