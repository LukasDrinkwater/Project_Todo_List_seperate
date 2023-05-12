import { getProjectsArray, reassigProjectClass } from "./projects";
import { formDataInfo } from "./form-data";
import { format, parseISO } from "date-fns";
import { userFormEvents } from "./user-events";

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
    const removeProjectButton = document.createElement("button");

    projectCard.classList.add("project-card");
    projectCard.dataset.projectIndex = projectIndex;
    removeProjectButton.setAttribute("id", "remove-project");
    removeProjectButton.classList.add("remove-project-button");

    projectCardH1.innerHTML = currentProject.projectName;
    projectCard.appendChild(projectCardH1);
    removeProjectButton.innerHTML = "Remove Project";

    for (let j = 0; j < currentProject.tasks.length; j++) {
      const taskIndex = currentProject.tasks.indexOf(currentProject.tasks[j]);

      const taskInfoContainer = document.createElement("div");
      const taskCard = document.createElement("div");
      const taskCardp = document.createElement("p");
      const taskCardDate = document.createElement("div");
      const taskCardDatep = document.createElement("p");
      const taskCardPriority = document.createElement("div");

      taskCardp.setAttribute("contenteditable", true);

      taskInfoContainer.classList.add("task-info-container");
      taskCard.classList.add("task-card");
      taskCardp.classList.add("task-p");
      taskCardDate.classList.add("date-container");
      taskCardDatep.classList.add("date");
      // taskCardDate.classList.add("normal");
      taskCardPriority.classList.add("priority");
      taskCardPriority.classList.add("normal");

      taskCardp.dataset.taskIndex = taskIndex;
      taskCardp.dataset.projectIndex = projectIndex;

      taskCardp.innerHTML = currentProject.tasks[j]._whatToDo;
      taskCardDatep.innerHTML = currentProject.tasks[j]._dueDate;

      taskCard.appendChild(taskCardPriority);
      taskCard.appendChild(taskCardp);
      taskCardDate.appendChild(taskCardDatep);
      taskCard.appendChild(taskCardDate);
      taskInfoContainer.appendChild(taskCard);
      projectCard.appendChild(taskInfoContainer);
    }

    projectCard.appendChild(removeProjectButton);
    projectContainer.appendChild(projectCard);
  }
}

function changeDatePriority() {
  const {
    format,
    differenceInDays,
    parse,
    parseISO,
    differenceInCalendarDays,
  } = require("date-fns");

  let currentDate = new Date();
  let dueDateDiv = document.getElementsByClassName("date");

  let formattedCurrentDate = format(currentDate, "MM/dd/yyyy");
  formattedCurrentDate = new Date(formattedCurrentDate);
  let formattedCurrentDateObj = new Date(
    formattedCurrentDate.getFullYear(),
    formattedCurrentDate.getMonth(),
    formattedCurrentDate.getDate()
  );

  for (let i = 0; i < dueDateDiv.length; i++) {
    let divDateString = dueDateDiv[i].innerHTML;

    let parsedDivDate = parseISO(divDateString);

    let formattedDivDate = format(parsedDivDate, "MM/dd/yyyy");
    formattedDivDate = new Date(formattedDivDate);
    let formattedDivDateObj = new Date(
      formattedDivDate.getFullYear(),
      formattedDivDate.getMonth(),
      formattedDivDate.getDate()
    );

    let daysDifference = differenceInCalendarDays(
      formattedCurrentDateObj,
      formattedDivDateObj
    );

    if (daysDifference <= 5) {
      dueDateDiv[i].classList.add("close-date");
    } else if (daysDifference <= 2) {
      dueDateDiv[i].classList.add("urgent-date");
    } else {
      dueDateDiv[i].classList.add("normal-date");
    }
    // console.log(formattedCurrentDateObj, formattedDivDateObj);
  }
}

function addDomTasks(projectToAddTo) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  let projectCardElements = document.querySelectorAll(".project-card");
  console.log(projectCardElements);
}

export {
  domCreateProject,
  addDomTasks,
  clearProjectTaskContainer,
  changeDatePriority,
};
