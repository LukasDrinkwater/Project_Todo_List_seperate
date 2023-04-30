// class AllProjects {
//   constructor(projectName) {
//     this._projectName = projectName;
//   }
// }

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
  let projects = JSON.parse(localStorage.getItem("allProjects"));
  console.log(projects);
  return projects;
}

function addProjectToLocalStorage(project) {
  let projects = getProjectsArray(); // get the local storage projects array
  console.log(project);
  projects.push(project);
  localStorage.setItem("allProjects", JSON.stringify(projects));
}

export { Project, addProjectToLocalStorage };
