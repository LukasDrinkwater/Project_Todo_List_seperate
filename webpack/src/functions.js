// class that is the project and tasks for the todo list can be added to it.

// use classes or a factory function to create each item that is added to
// the specific project todo list.

// project and task trackers/assigners
// let currentProjectID = 1;

// let currentTaskID = 1;
let projectArray = [];

// project submit functions
// functions to grab the data and then put it into an object with constructor
// then create the html element.

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
  console.log(projectArray[0].projectID);
}

function projectFormObject(projectFormValues) {
  return {
    get projectID() {
      return projectFormValues.projectName;
    },
  };
}

// function ProjectFormObject() {
//   let projectName, projectID;

//   Object.defineProperty(this, "setProjectID", {
//     get: function () {
//       return projectID;
//     },
//     set: function () {
//       ProjectID = currentProjectID;
//       currentProjectID++;
//     },
//   });
// }

export { getProjectFormData };
