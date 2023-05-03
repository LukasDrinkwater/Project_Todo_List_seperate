import { formDataInfo } from "./form-data";
import { Task, addTaskToProject } from "./task";
import {
  Project,
  addProjectToLocalStorage,
  getProjectsArray,
  reassigProjectClass,
  addAllBackToLocalStorage,
} from "./projects";

function makeDefaultProject1() {
  let defaultProject1 = new Project([], "Default Project");
  let task = makeDefaultTask1();
  addProjectToLocalStorage(defaultProject1);
  addTaskToProject(task);
}

// making default task 1
function makeDefaultTask1() {
  let defaultTask1 = new Task(
    "test task",
    "test if it makes a task",
    "15/05/2023",
    "Default Project"
  );

  return defaultTask1;
}

function checkIfDefaultTask1Excists() {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  if (projects.length === 0) {
    makeDefaultProject1();
  }
}

// makes the default task DOM
// project card will need to be changed to task list
function makeDefaultTaskDOM() {
  let task = makeDefaultTask1();

  // let attachToThisProjectCard = formDataInfo.projectTaskContainer;

  // const projectTaskCard = document.createElement("div");
  // const projectTaskCardp = document.createElement("p");

  // projectTaskCard.classList.add("task-card");

  // projectTaskCardp.innerHTML = task.taskName;

  projectTaskCard.appendChild(projectTaskCardp);

  attachToThisProjectCard.appendChild(projectTaskCard);
}

export { makeDefaultTask1, makeDefaultTaskDOM, checkIfDefaultTask1Excists };
