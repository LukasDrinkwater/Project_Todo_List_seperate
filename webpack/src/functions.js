// class that is the project and tasks for the todo list can be added to it.

// use classes or a factory function to create each item that is added to
// the specific project todo list.

// project and task trackers/assigners
// let currentProjectID = 1;

// let currentTaskID = 1;
let projectArray = [];
let taskArray = [];

// PROJECT SUBMIT FUNCTIONS
// function to grab the data when Add project is clicked and then put it into an
// object with factory function then create the html element.

function getProjectFormData(projectForm) {
  // for it to go into.
  const projectFormData = new FormData(projectForm);
  const projectFormValues = {};

  // loop which matches the key to the correct value
  for (let [key, value] of projectFormData.entries()) {
    projectFormValues[key] = value;
  }
  console.log(projectFormValues.projectName);

  //   create the new ProjectFormObject
  const project = projectFormObject(projectFormValues);

  //   push to array.
  projectArray.push(project);
  console.log(projectArray[0].projectName);
}

// factory function to create the array for each project
function projectFormObject(projectFormValues) {
  // destructuring assignment to extract the property values
  //  from the taskFormValues. Finds properties with those names and assigns
  // their values to a new variable.
  const { projectName } = projectFormValues;
  return {
    projectName,
    getProjectName() {
      return this.projectName;
    },
  };
}

// TASK SUBMIT FUNCTIONS
// function tom grab the data when Add Task is clicked and the pus it into an
// object with a factory function. Then check what project is selected in the
// dropdown and add the task card to that project object.
function getTaskFormData(taskForm) {
  const taskFormData = new FormData(taskForm);
  const taskFormValues = {};

  // loop which matches the key to the correct value
  for (let [key, value] of taskFormData.entries()) {
    taskFormValues[key] = value;
    // console.log(taskFormValues);
  }

  const task = taskFormObject(taskFormValues);
  taskArray.push(task);
  console.log(taskArray[0]);
  console.log(taskArray[0].taskName);
}

function taskFormObject(taskFormValues) {
  // destructuring assignment to extract the property values
  //  from the taskFormValues. Finds properties with those names and assigns
  // their values to a new variable.
  const { taskName, whatToDo, projectToAddTo, completeDate } = taskFormValues;
  return {
    taskName,
    getTaskName() {
      return this.taskName;
    },
    whatToDo,
    getWhatToDo() {
      return this.whatToDo;
    },
    projectToAddTo,
    getProjectToAddTo() {
      return this.projectToAddTo;
    },
    completeDate,
    getCompleteDate() {
      return this.completeDate;
    },
  };
}

// function for adding the new task to the selected project
function addTaskToProject(projectArray, taskArray) {
  // loop through the arrray and check the .projectName and if it matches
  // .projectToAddTo add it to that one.
  console.log("its here");

  for (let i = 0; i < projectArray.length; i++) {
    console.log(taskArray[i]);
    if (taskArray[i].projectToAddTo === "") {
      //Default Project
      console.log("add it to default project");
    }
    if (projectArray[i].projectName === taskArray[i].projectToAddTo) {
      // function that creates the task card div
    }
  }
}

// // factory function to create the array for each project
// function taskFormObject(taskFormValues) {
//   return {
//     taskName: taskFormValues.taskName,
//     get taskName() {
//       return this.taskName;
//     },

//     whatToDo: taskFormValues.whatToDo,
//     get whatToDo() {
//       return this.whatToDo;
//     },

//     projectToAddTo: taskFormValues.projectToAddTo,
//     get projectToAddTo() {
//       return this.projectToAddTo;
//     },
//     completeDate: taskFormValues.completeDate,
//     get completeDate() {
//       return this.completeDate;
//     },
//     // set completeDate() {
//     //   //
//     // },
//   };
// }

function createDefaultProject(projectTaskContainer) {
  const defaultProject = {
    projectName: "Default Project",
  };
  projectArray.push(defaultProject);
  // create divs, h1 and p
  let projectCard = document.createElement("div");
  let projectCardH1 = document.createElement("h1");
  let projectTaskCard = document.createElement("div");
  let projectTaskCardp = document.createElement("p");

  // assign project and task card correct class
  projectCard.classList.add("project-card");
  projectTaskCard.classList.add("task-card");

  // assign text to examples

  projectCardH1.textContent = "Todays tasks";
  projectTaskCardp.textContent = "This is what I want to do";

  // append to items
  projectCard.appendChild(projectCardH1);
  projectTaskCard.appendChild(projectTaskCardp);
  projectCard.appendChild(projectTaskCard);
  projectTaskContainer.appendChild(projectCard);
}

export {
  getProjectFormData,
  createDefaultProject,
  getTaskFormData,
  addTaskToProject,
};

export { projectArray, taskArray };
