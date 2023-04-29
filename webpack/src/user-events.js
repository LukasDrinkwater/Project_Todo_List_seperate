import { formDataInfo } from "./form-data";

function userFormEvents() {
  const form = formDataInfo;

  // add event listener to the Add Project button and prevent default and call
  // functions

  form.projectForm.addEventListener("submit", (event) => {
    console.log("working");
    // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    event.preventDefault();
  });

  // add event listener to the Add Task button and prevent default and call
  // functions
  form.taskForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    event.preventDefault();

    // take the variables from the form, then pass them into a new class
    let taskFormData = getProjectFormData(form.taskForm);

    //  call a function that creates a new
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
