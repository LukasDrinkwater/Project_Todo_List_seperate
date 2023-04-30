import { formDataInfo } from "./form-data";
import { Task } from "./task";
import { Project } from "./projects";

function makeDefaultProject1() {
  let defaultProject1 = new Project([], "defaultTask1");
}

// making default task 1
function makeDefaultTask1() {
  let defaultTask1 = new Task(
    "default task 1",
    "test if it makes a task",
    "15/05/2023",
    "defaultTask1"
  );

  return defaultTask1;
}

// makes the default task DOM
// project card will need to be changed to task list
function makeDefaultTaskDOM() {
  let task = makeDefaultTask1();

  let attachToThisProjectCard = formDataInfo.projectTaskContainer;

  const projectTaskCard = document.createElement("div");
  const projectTaskCardp = document.createElement("p");

  projectTaskCard.classList.add("task-card");

  projectTaskCardp.innerHTML = task.taskName;

  projectTaskCard.appendChild(projectTaskCardp);

  attachToThisProjectCard.appendChild(projectTaskCard);
}

export { makeDefaultTask1, makeDefaultTaskDOM };
