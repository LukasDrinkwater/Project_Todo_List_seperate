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
  let projectsParsed = JSON.parse(localStorage.getItem("allProjects"));
  // console.log(projectsParsed);
  return projectsParsed;
}

function addProjectToLocalStorage(project) {
  let projects = getProjectsArray(); // get the local storage projects array

  projects.push(project);
  localStorage.setItem("allProjects", JSON.stringify(projects));
}

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
    let project = new Project(
      projectsParsed[i]._tasks,
      projectsParsed[i]._projectName
    );
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
