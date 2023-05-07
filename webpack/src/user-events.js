import { formDataInfo } from "./form-data";
import { Task, addTaskToProject } from "./task";
import {
  Project,
  addProjectToLocalStorage,
  getProjectsArray,
  reassigProjectClass,
  addAllBackToLocalStorage,
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

  addEventListenerToTaskP(form);

  // form.taskP.addEventListener("click", () => {
  //   let taskP = document.querySelector("task-p");
  //   taskP.classList.add("task-p-editing");
  //   console.log("listener working");
  // });
}
// event listener that is triggered when the p is clicked to edit the text

function addEventListenerToTaskP(form) {
  // loop through node list to add event listner

  for (let i = 0; i < form.taskP.length; i++) {
    form.taskP[i].addEventListener("click", () => {
      // let taskP = document.querySelector("task-p");
      form.taskP[i].classList.add("task-p-editing");
      saveOrDiscardTaskEdit(form, i);
      console.log(i);
    });
  }
}

// add tick and cross to save or discard changes.
function saveOrDiscardTaskEdit(form, i) {
  let saveOrDiscard;
  let pContainerDiv = form.taskP[i].parentNode;

  let saveButton = document.createElement("div");
  let discardButton = document.createElement("div");

  saveButton.innerHTML = "&#10004";
  discardButton.innerHTML = "&#10006";

  saveButton.classList.add("save-button");
  discardButton.classList.add("discard-button");

  pContainerDiv.appendChild(saveButton);
  pContainerDiv.appendChild(discardButton);

  saveButton.addEventListener("click", () => {
    // do something to save and update the task to local storage
  });

  discardButton.addEventListener("click", () => {
    // do something that reverts the changes and removed the save and discard tick
  });
}
//
//
//

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
