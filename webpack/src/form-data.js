// gets all the form data and DOM info that will be used in multiple functions

const formDataInfo = {
  projectForm: document.getElementById("project-submit-form"),
  taskForm: document.getElementById("task-submit-form"),
  submitProjectButton: document.getElementById("submit-project"),
  submitTaskButton: document.getElementById("submit-task-button"),
  projectTaskContainer: document.getElementById("project-task-container"),
  selectMenu: document.getElementById("project-to-add-to"),
  taskP: document.getElementsByClassName("task-p"),
  taskDate: document.getElementsByClassName("date"),
  taskCard: document.getElementsByClassName("task-card"),
  removeProjectButton: document.getElementsByClassName("remove-project-button"),
};

export { formDataInfo };
