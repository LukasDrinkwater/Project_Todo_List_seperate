import { userFormEvents } from "./user-events";
import { makeDefaultTask1, makeDefaultTaskDOM } from "./create-defaults";
import { AllProjects } from "./projects";
import { formDataInfo } from "./form-data";

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
  userFormEvents(); //  functions for default project
  refreshProjectSelect(); //updates project select menu dropdown

  // makeDefaultTaskDOM();

  // function
}

// DOM REFRESH STUFF
function refreshProjectSelect() {
  let projects = JSON.parse(window.localStorage.getItem("allProjects"));
  let selectMenu = formDataInfo.selectMenu;
  let options = selectMenu.options;
  let optionsValues = [];

  console.log(projects[0]);

  for (let i = 0; i < projects.length; i++) {
    let option = document.createElement("option");
    option.value = projects[i].projectName;
    console.log(projects[i].projectName);

    option.text = projects[i].projectName;
    console.log(option.text);

    selectMenu.add(option);
  }

  // for (let i = 0; i < options.length; i++) {
  //   optionsValues.push(options[i].value);
  // }
}

// class

export { controller, refreshProjectSelect };
