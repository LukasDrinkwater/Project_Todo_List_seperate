function domCreateProject(projectArray) {
  // create divs, h1 and p
  const projectCard = document.createElement("div");
  const projectCardH1 = document.createElement("h1");
  const projectTaskCard = document.createElement("div");
  const projectTaskCardp = document.createElement("p");

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

export { domCreateProject };
