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

// function Task(taskName, whatToDo, dueDate, projectName) {
//   return {
//     taskName,
//     whatToDo,
//     dueDate,
//     projectName,
//   };
// }

export { Task };
