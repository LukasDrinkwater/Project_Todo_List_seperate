import { formDataInfo } from "./form-data";
import { Task, addTaskToProject } from "./task";
import {
  Project,
  addProjectToLocalStorage,
  getProjectsArray,
  reassigProjectClass,
} from "./projects";
import { refreshProjectSelect } from "./controller";

function userFormEvents() {
  const form = formDataInfo;

  // add event listener to the Add Project button and prevent default and call
  // functions
  form.projectForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    let formData = formDataInfo.projectForm;
    let projectData = getProjectFormData(formData); //data from the projet form

    let project = new Project([], projectData.projectName);
    addProjectToLocalStorage(project);
    // refreshProjectSelect();
  });

  //
  //
  //
  //
  // add event listener to the Add Task button and prevent default and call
  // functions
  form.taskForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    let formData = formDataInfo.taskForm;
    let taskData = getTaskFormData(formData); // data from the task form

    let task = new Task(
      taskData.taskName,
      taskData.whatToDo,
      taskData.completeDate,
      taskData.projectToAddTo
    );

    // add the new task to the specific project
    addTaskToProject(task);
    // let projectsParsed = getProjectsArray();
    // let projectsArray = reassigProjectClass(projectsParsed);

    console.log(task.taskName, task.whatToDo);

    //  call a function that creates a new task object
  });
}

//
//
//

// function that gets the user data from the task form
function getProjectFormData(formData) {
  // for it to go into.
  const projectFormData = new FormData(formData);
  const projectFormValues = {};
  console.log(projectFormValues);
  // loop which matches the key to the correct value
  for (let [key, value] of projectFormData.entries()) {
    projectFormValues[key] = value;
  }

  //   create the new ProjectFormObject
  // const project = projectFormObject(projectFormValues);

  return projectFormValues;
}

function getTaskFormData(formData) {
  const taskFormData = new FormData(formData);
  const taskFormValues = {};

  // loop which matches the key to the correct value
  for (let [key, value] of taskFormData.entries()) {
    taskFormValues[key] = value;
  }
  return taskFormValues;
}

export { userFormEvents };
