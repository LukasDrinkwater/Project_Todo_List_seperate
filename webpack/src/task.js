import { reassigProjectClass, getProjectsArray } from "./projects";

class Task {
  constructor(taskName, whatToDo, dueDate, assignedProject) {
    this._taskName = taskName;
    this._whatToDo = whatToDo;
    this._dueDate = dueDate;
    this._assignedProject = assignedProject;
  }
  get taskName() {
    return this._taskName;
  }
  get whatToDo() {
    return this._whatToDo;
  }
  get dueDate() {
    return this.dueDate;
  }
  get assignedProject() {
    return this.assignedProject;
  }
}

function addTaskToProject(task) {
  let projectsParsed = getProjectsArray(); // get the local storage projects array
  let projects = reassigProjectClass(projectsParsed);

  // loop through projects array and check to see if the project name matches
  // the task assignedProject. if it does push the task to the task array in the
  // projects array.

  console.log(task);

  // projects.push(project);
  // localStorage.setItem("allProjects", JSON.stringify(projects));
}

export { Task, addTaskToProject };
