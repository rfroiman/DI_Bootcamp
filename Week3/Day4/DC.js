const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const listTasks =
  document.querySelector(".listTasks");


// BONUS I
// Array of task objects

const tasks = [];


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

    task_id: tasks.length,

    text: taskText,

    done: false

  };


  // Add object to array

  tasks.push(newTask);


  // Create task div

  const taskDiv =
    document.createElement("div");


  taskDiv.classList.add("task");


  // data-task-id

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


  // Add elements to task div

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


  // Clear input

  taskInput.value = "";


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


  // Find task object

  const task =
    tasks.find(
      item =>
        item.task_id === taskId
    );


  if (task) {

    task.done =
      checkbox.checked;

  }


  // Change DOM appearance

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
// DELETE TASK
// BONUS II
// -----------------------------

function deleteTask(event) {

  // currentTarget = button

  const deleteButton =
    event.currentTarget;


  const taskDiv =
    deleteButton.parentElement;


  const taskId =
    Number(
      taskDiv.dataset.taskId
    );


  // Find task position

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


  console.log(tasks);

}


// -----------------------------
// FORM EVENT
// -----------------------------

taskForm.addEventListener(
  "submit",
  addTask
);