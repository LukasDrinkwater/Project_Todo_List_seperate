import { Task } from "./task";

class Project {
  // task object
  constructor(tasks, projectName) {
    this._tasks = tasks;
    this._projectName = projectName;

    // let taskArray = [];
  }
  get tasks() {
    return this._tasks;
  }
  get projectName() {
    return this._projectName;
  }
}

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
      // console.log(task);
    }
    projects.push(project);
  }

  return projects;
}

// for loop to take the tasks and project name from each index in the projects local
// storage array

export {
  Project,
  addProjectToLocalStorage,
  reassigProjectClass,
  getProjectsArray,
  addAllBackToLocalStorage,
};
