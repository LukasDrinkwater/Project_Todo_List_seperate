import { getProjectsArray, reassigProjectClass } from "./projects";
import { formDataInfo } from "./form-data";

// projectObject is the project that is being added.
function addProjectDOM(projectObject) {}

function clearProjectTaskContainer() {
  let projectTaskContainer = formDataInfo.projectTaskContainer;

  projectTaskContainer.innerHTML = "";
}

// takes in the project array.
function domCreateProject(projectArray) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  for (let i = 0; i < projects.length; i++) {
    let currentProject = projects[i];
    const projectContainer = formDataInfo.projectTaskContainer;
    const projectIndex = projects.indexOf(currentProject);

    const projectCard = document.createElement("div");
    const projectCardH1 = document.createElement("h1");

    projectCard.classList.add("project-card");
    projectCard.dataset.projectIndex = projectIndex;

    projectCardH1.innerHTML = currentProject.projectName;
    projectCard.appendChild(projectCardH1);

    for (let j = 0; j < currentProject.tasks.length; j++) {
      const taskIndex = currentProject.tasks.indexOf(currentProject.tasks[j]);

      const taskInfoContainer = document.createElement("div");
      const taskCard = document.createElement("div");
      const taskCardp = document.createElement("p");
      const taskCardDate = document.createElement("div");
      const taskCardPriority = document.createElement("div");

      taskCardp.setAttribute("contenteditable", true);

      taskInfoContainer.classList.add("task-info-container");
      taskCard.classList.add("task-card");
      taskCardp.classList.add("task-p");
      taskCardDate.classList.add("date");
      // taskCardDate.classList.add("normal");
      taskCardPriority.classList.add("priority");
      taskCardPriority.classList.add("normal");

      taskCardp.dataset.taskIndex = taskIndex;
      taskCardp.dataset.projectIndex = projectIndex;

      taskCardp.innerHTML = currentProject.tasks[j]._whatToDo;
      taskCardDate.innerHTML = currentProject.tasks[j]._dueDate;

      taskCard.appendChild(taskCardPriority);
      taskCard.appendChild(taskCardp);
      taskCard.appendChild(taskCardDate);
      taskInfoContainer.appendChild(taskCard);
      projectCard.appendChild(taskInfoContainer);
    }

    projectContainer.appendChild(projectCard);
  }
}

function changeDatePriority() {
  const formDate = formDataInfo.taskDate;
  const currentDate = new Date();
}

function addDomTasks(projectToAddTo) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  let projectCardElements = document.querySelectorAll(".project-card");
  console.log(projectCardElements);
}

export { domCreateProject, addDomTasks, clearProjectTaskContainer };
