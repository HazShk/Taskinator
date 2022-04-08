var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//counter for each time a task is created
var taskIdCounter = 0;

//form handler
var TaskFormHandler = function (event) {
  event.preventDefault();
  //console.log(event);

  //console.dir(taskNameInput);
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //check if input values for empty strings
  if (!taskNameInput || !taskTypeInput) {
    window.alert("You will need to fill out the task form");
    return false;
  }
  //package up data as obj
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  //send it as an argument to createTaskEl
  createTaskEl(taskDataObj);

  //reset the form
  formEl.reset();
};

var createTaskEl = function (taskDataObj) {
  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  //give it a classname
  taskInfoEl.className = "task-info";
  //add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  //console.dir(listItemEl);

  //counter increment
  taskIdCounter++;
};

formEl.addEventListener("submit", TaskFormHandler);
