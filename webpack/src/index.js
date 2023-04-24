import _ from "lodash";
import { formatDistance, subDays } from "date-fns";
formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
import "./styles.css";
import {
  getProjectFormData,
  createDefaultProject,
  getTaskFormData,
  addTaskToProject,
} from "./functions";
import { projectArray, taskArray } from "./functions";

// class that is the project and tasks for the todo list can be added to it.
// use classes or a factory function to create each item that is added to
// the specific project todo list.
// Get the form element and add an event listener for when it's submitted

// form variables
const projectForm = document.getElementById("project-submit-form");
const taskForm = document.getElementById("task-submit-form");
const submitProjectButton = document.getElementById("submit-project");
const submitTaskButton = document.getElementById("submit-task-button");

const projectTaskContainer = document.getElementById("project-task-container");

// add event listener to the Add Project button and prevent default and call
// functions

projectForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  // creates an object of the from the form data and a blank object
  event.preventDefault();

  getProjectFormData(projectForm);
});

// add event listener to the Add Task button and prevent default and call
// functions
taskForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  // creates an object of the from the form data and a blank object
  event.preventDefault();

  getTaskFormData(taskForm);
  addTaskToProject(projectArray, taskArray);
});

//
//
//
//
//
//
//

projectForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the values from the form input fields
  const projectName = document.getElementById("projectName").value;

  // Create a new object with the form data
  const projectData = {
    name: projectName,
  };

  // Create a new card div element
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("task-card");

  // Set the card div's innerHTML to display the project name
  cardDiv.innerHTML = `<p>${projectData.name}</p>`;

  // Append the new card div to the "project-task-container" element
  const projectTaskContainer = document.getElementById(
    "project-task-container"
  );
  projectTaskContainer.appendChild(cardDiv);
});

function main() {
  createDefaultProject(projectTaskContainer);
}

main();
