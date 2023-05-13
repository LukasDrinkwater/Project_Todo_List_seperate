import { userFormEvents, removeProjectEvent } from "./user-events";
import {
  makeDefaultTask1,
  makeDefaultTaskDOM,
  checkIfDefaultTask1Excists,
} from "./create-defaults";
import { AllProjects, reassigProjectClass, getProjectsArray } from "./projects";
import { formDataInfo } from "./form-data";
import { domCreateProject, changeDatePriority } from "./change-dom";

// What i would do first is, figure out how to write a project to a json file
// Then how to read that project from there
// Then figure out how to add a task to that project and write that to the file

// work after something called CRUD
// Create, read, update and delete
// you want to have a function to create data
// a function to read data
// multiple functions to update data
// and a function to delete data

// function to create the project storage that holds all the projects.
function createProjectStorage() {
  let allProjects = [];
  if (localStorage.getItem("allProjects") === null) {
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
  }
}

function controller() {
  createProjectStorage(); //makes the project storage array.
  checkIfDefaultTask1Excists();
  // userFormEvents(); //  functions for default project
  refreshProjectSelect(); //updates project select menu dropdown

  domCreateProject();
  userFormEvents(); //  functions for default project
  removeProjectEvent();
  changeDatePriority();
}

// DOM REFRESH STUFF
// refreshed the project to add to drop down.
function refreshProjectSelect() {
  let projectsParsed = getProjectsArray();
  let projects = reassigProjectClass(projectsParsed);
  let selectMenu = formDataInfo.selectMenu;
  let options = selectMenu.options;
  let optionsValues = [];

  selectMenu.innerHTML = ""; //clears it so it can loop through the local storage
  //array

  for (let i = 0; i < projects.length; i++) {
    let option = document.createElement("option");
    option.value = projects[i].projectName;

    option.text = projects[i].projectName;

    selectMenu.add(option);
  }
}

export { controller, refreshProjectSelect };
