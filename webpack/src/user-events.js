import { formDataInfo } from "./form-data";
import { Task } from "./task";
import { Project, addProjectToLocalStorage } from "./projects";
import { refreshProjectSelect } from "./controller";

function userFormEvents() {
  const form = formDataInfo;

  // add event listener to the Add Project button and prevent default and call
  // functions

  form.projectForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    let formData = formDataInfo.projectForm;
    let projectData = getProjectFormData(formData);

    let project = new Project([], projectData.projectName);
    addProjectToLocalStorage(project);
    // refreshProjectSelect();
  });

  // add event listener to the Add Task button and prevent default and call
  // functions
  form.taskForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    event.preventDefault();

    // take the variables from the form, then pass them into a new class
    let taskFormData = getProjectFormData(form.taskForm);

    //  call a function that creates a new task object
  });
}

// function that gets the user data from the task form
function getProjectFormData(formData) {
  // for it to go into.
  const projectFormData = new FormData(formData);
  const projectFormValues = {};

  // loop which matches the key to the correct value
  for (let [key, value] of projectFormData.entries()) {
    projectFormValues[key] = value;
  }

  //   create the new ProjectFormObject
  // const project = projectFormObject(projectFormValues);

  return projectFormValues;
}

export { userFormEvents };
