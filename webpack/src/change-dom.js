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

    const projectCard = document.createElement("div");
    const projectCardH1 = document.createElement("h1");

    projectCard.classList.add("project-card");

    projectCardH1.innerHTML = currentProject.projectName;
    projectCard.appendChild(projectCardH1);
    // console.log(currentProject);
    for (let j = 0; j < currentProject.tasks.length; j++) {
      const taskCard = document.createElement("div");
      // const taskCardH1 = document.createElement("h1");
      const taskCardp = document.createElement("p");

      taskCard.classList.add("task-card");
      // taskCardH1.innerHTML = currentProject.tasks[j]._taskName;
      taskCardp.innerHTML = currentProject.tasks[j]._whatToDo;
      // console.log(currentProject.tasks[j].whatToDo);
      // taskCard.appendChild(taskCardH1);
      taskCard.appendChild(taskCardp);
      projectCard.appendChild(taskCard);
    }

    projectContainer.appendChild(projectCard);
  }
}

function addDomTasks(projectToAddTo) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  let projectCardElements = document.querySelectorAll(".project-card");
  console.log(projectCardElements);
}

export { domCreateProject, addDomTasks, clearProjectTaskContainer };
