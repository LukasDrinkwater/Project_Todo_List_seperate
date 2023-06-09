import { Task } from "./task";
import { domCreateProject, clearProjectTaskContainer } from "./change-dom";
import { userFormEvents, removeProjectEvent } from "./user-events";

// class to make the projects
class Project {
  constructor(tasks, projectName) {
    this._tasks = tasks;
    this._projectName = projectName;
  }
  get tasks() {
    return this._tasks;
  }
  get projectName() {
    return this._projectName;
  }
}

// pulls the project array as a string.
function getProjectsArray() {
  let projectsParsed = JSON.parse(localStorage.getItem("allProjects"));
  // console.log(projectsParsed);
  return projectsParsed;
}

// for adding a single project to local storage.
function addProjectToLocalStorage(project) {
  let projects = getProjectsArray(); // get the local storage projects array

  projects.push(project);
  localStorage.setItem("allProjects", JSON.stringify(projects));
}

// for adding all project including tasks back
function addAllBackToLocalStorage(projects) {
  localStorage.setItem("allProjects", JSON.stringify(projects));
}

// remakes the each project object when pulling it out of the local storage
// so you can use the prototypes and methods.
function reassigProjectClass(projectsParsed) {
  let projects = [];
  // for loop to take the tasks and project name from each index in the projects local
  // storage array
  for (let i = 0; i < projectsParsed.length; i++) {
    let projectTasks = projectsParsed[i]._tasks;
    let tasks;
    let project = new Project(
      projectsParsed[i]._tasks,
      projectsParsed[i]._projectName
    );
    for (let j = 0; j < projectTasks.length; j++) {
      let task = new Task(
        projectTasks[j]._taskName,
        projectTasks[j]._whatToDo,
        projectTasks[j]._dueDate,
        projectTasks[j]._assignedProject
      );
    }
    projects.push(project);
  }

  return projects;
}

// function that takes the updated task and updates the correct task.
function updateEditedTaskToProject(editedTask) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);
  let taskIndex = editedTask.dataset.taskIndex;
  let projectIndex = editedTask.dataset.projectIndex;
  let projectToAddto = projects[projectIndex];

  projects[projectIndex]._tasks[taskIndex]._whatToDo = editedTask.innerHTML;

  console.log("parsed", projects);
  return projects;
}

// function to delete the project
// could also get the index using indexOf()
function deleteProjectFromStorage(projectDOMName) {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectName === projectDOMName) {
      projects.splice(i, 1);
      // updpate the project local storage.
    }
    addAllBackToLocalStorage(projects);
    // refresh the DOm
    clearProjectTaskContainer();
    domCreateProject();
    removeProjectEvent();
  }
}

export {
  Project,
  addProjectToLocalStorage,
  reassigProjectClass,
  getProjectsArray,
  addAllBackToLocalStorage,
  updateEditedTaskToProject,
  deleteProjectFromStorage,
};
