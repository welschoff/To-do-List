import { createTitleComponent } from "./lib/titleComponent.js";
import { createEnterToDoList } from "./lib/enterToDoList.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  const toDoInput = createEnterToDoList();

  appElement.append(titleComponent);
  appElement.append(toDoInput);
}

createApp();
