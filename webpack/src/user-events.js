import { formDataInfo } from "./form-data";

function userFormEvents() {
  const form = formDataInfo();

  // add event listener to the Add Project button and prevent default and call
  // functions

  form.projectForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    event.preventDefault();

    // getProjectFormData(projectForm);
  });

  // add event listener to the Add Task button and prevent default and call
  // functions
  form.taskForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    // creates an object of the from the form data and a blank object
    event.preventDefault();

    //  call a function that creates a new
  });
}

export { userFormEvents };
