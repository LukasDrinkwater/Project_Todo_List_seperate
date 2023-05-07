import { reassigProjectClass, getProjectsArray } from "./projects";

class Task {
  constructor(taskName, whatToDo, dueDate, assignedProject) {
    // this._taskName = taskName;
    this._whatToDo = whatToDo;
    this._dueDate = dueDate;
    this._assignedProject = assignedProject;
  }
  // get taskName() {
  //   return this._taskName;
  // }
  get whatToDo() {
    return this._whatToDo;
  }
  get dueDate() {
    return this._dueDate;
  }
  get assignedProject() {
    return this._assignedProject;
  }
}

function addTaskToProject(task) {
  let projectsParsed = getProjectsArray(); // get the local storage projects array
  let projects = reassigProjectClass(projectsParsed);

  // loop through projects array and check to see if the project name matches
  // the task assignedProject. if it does push the task to the task array in the
  // projects array.
  for (let i = 0; i < projects.length; i++) {
    // console.log(projects[i].projectName);
    // console.log(task.assignedProject);
    if (projects[i].projectName === task.assignedProject) {
      projects[i].tasks.push(task);
    }
  }
  console.log(projects);
  return projects;

  // projects.push(project);
  // localStorage.setItem("allProjects", JSON.stringify(projects));
}

// function that adds the changed task back to the task array

function updateEditedTask() {}

export { Task, addTaskToProject };
