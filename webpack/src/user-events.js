import { formDataInfo } from "./form-data";
import { Task, addTaskToProject } from "./task";
import {
  Project,
  addProjectToLocalStorage,
  getProjectsArray,
  reassigProjectClass,
  addAllBackToLocalStorage,
  updateEditedTaskToProject,
} from "./projects";
import { refreshProjectSelect } from "./controller";
import { domCreateProject, clearProjectTaskContainer } from "./change-dom";

function userFormEvents() {
  const form = formDataInfo;

  // add event listener to the Add Project button and prevent default and call
  // functions
  form.projectForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    let formData = formDataInfo.projectForm;
    let projectData = getProjectFormData(formData); //data from the projet form

    let project = new Project([], projectData.projectName);
    addProjectToLocalStorage(project);
    // update DOM
    refreshProjectSelect();
    clearProjectTaskContainer();
    domCreateProject();
  });

  //
  //
  //
  //
  // add event listener to the Add Task button and prevent default and call
  // functions
  form.taskForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    let formData = formDataInfo.taskForm;
    let taskData = getTaskFormData(formData); // data from the task form

    let task = new Task(
      taskData.taskName,
      taskData.whatToDo,
      taskData.completeDate,
      taskData.projectToAddTo
    );

    // add the new task to the specific project
    let projects = addTaskToProject(task);
    addAllBackToLocalStorage(projects);
    // update DOM
    refreshProjectSelect();
    clearProjectTaskContainer();
    domCreateProject();

    //  call a function that creates a new task object
  });
  // event listener that is triggered when the p is clicked to edit the text
  addEventListenerToTaskP(form);
  //  event listener that is triggered when the date is clicked and changes the
  // priority colour
  addEvenListenerToDate();
}

// event listener that is triggered when the p is clicked to edit the text
function addEventListenerToTaskP(form) {
  // loop through node list to add event listner

  for (let i = 0; i < form.taskP.length; i++) {
    form.taskP[i].addEventListener("click", () => {
      let currentTask = form.taskP[i];
      // let taskP = document.querySelector("task-p");
      currentTask.classList.add("task-p-editing");
      saveOrDiscardTaskEdit(form, i, currentTask);
    });
  }
}

//  event listener that is triggered when the date is clicked and changes the
// priority colour
function addEvenListenerToDate() {
  const taskDate = document.getElementsByClassName("priority");
  let currentPriority = "normal";
  for (let i = 0; i < taskDate.length; i++) {
    taskDate[i].addEventListener("click", () => {
      if (currentPriority === "normal") {
        taskDate[i].classList.add("close");
        taskDate[i].classList.remove(currentPriority);
        currentPriority = "close";
      } else if (currentPriority === "close") {
        taskDate[i].classList.add("urgent");
        taskDate[i].classList.remove(currentPriority);
        currentPriority = "urgent";
      } else {
        taskDate[i].classList.add("normal");
        taskDate[i].classList.remove(currentPriority);
        currentPriority = "normal";
      }
    });
  }
}

// add tick and cross to save or discard changes.
function saveOrDiscardTaskEdit(form, i, currentTask) {
  let saveOrDiscard;
  let pContainerDiv = form.taskCard[i].parentNode;
  let checkEditDiscardButtons = document.querySelector(
    ".edit-button-container"
  );

  if (checkEditDiscardButtons === null) {
    let editButtonContainer = document.createElement("div");
    let saveButton = document.createElement("div");
    let discardButton = document.createElement("div");

    saveButton.innerHTML = "&#10004";
    discardButton.innerHTML = "&#10006";

    editButtonContainer.classList.add("edit-button-container");
    saveButton.classList.add("save-button");
    discardButton.classList.add("discard-button");

    editButtonContainer.appendChild(saveButton);
    editButtonContainer.appendChild(discardButton);
    pContainerDiv.appendChild(editButtonContainer);

    saveButton.addEventListener("click", () => {
      // do something to save and update the task to local storage
      let projectsWithTaskUpdated = updateEditedTaskToProject(currentTask);
      console.log(projectsWithTaskUpdated);
      addAllBackToLocalStorage(projectsWithTaskUpdated);

      clearProjectTaskContainer();
      domCreateProject();

      editButtonContainer.parentNode.removeChild(editButtonContainer);
    });

    discardButton.addEventListener("click", () => {
      // do something that reverts the changes and removed the save and discard tick
      editButtonContainer.parentNode.removeChild(editButtonContainer);
    });
  }
}

// function that gets the user data from the task form
function getProjectFormData(formData) {
  // for it to go into.
  const projectFormData = new FormData(formData);
  const projectFormValues = {};
  console.log(projectFormValues);
  // loop which matches the key to the correct value
  for (let [key, value] of projectFormData.entries()) {
    projectFormValues[key] = value;
  }

  //   create the new ProjectFormObject
  // const project = projectFormObject(projectFormValues);

  return projectFormValues;
}

function getTaskFormData(formData) {
  const taskFormData = new FormData(formData);
  const taskFormValues = {};

  // loop which matches the key to the correct value
  for (let [key, value] of taskFormData.entries()) {
    taskFormValues[key] = value;
  }
  return taskFormValues;
}

export { userFormEvents };
