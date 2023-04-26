function formDataInfo() {
  const projectForm = document.getElementById("project-submit-form");
  const taskForm = document.getElementById("task-submit-form");
  const submitProjectButton = document.getElementById("submit-project");
  const submitTaskButton = document.getElementById("submit-task-button");

  const projectTaskContainer = document.getElementById(
    "project-task-container"
  );

  return {
    get projectForm() {
      return projectForm;
    },
    get taskForm() {
      return taskForm;
    },
    get submitProjectButton() {
      return submitProjectButton;
    },
    get submitTaskButton() {
      return submitTaskButton;
    },
    get projectTaskContainer() {
      return projectTaskContainer;
    },
  };
}

export { formDataInfo };
