import { userFormEvents } from "./user-events";
import { makeDefaultTask1, makeDefaultTaskDOM } from "./create-defaults";
function controller() {
  //  functions for default project
  userFormEvents();
  makeDefaultTaskDOM();

  // function
}

// class

export { controller };
