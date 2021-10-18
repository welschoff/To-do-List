import { createTitleComponent } from "./lib/titleComponent.js";
import { createEnterToDoList } from "./lib/enterToDoList.js";
import { createElement } from "./lib/elements.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  const enterToDoList = createEnterToDoList(function (toDo) {
    let tasks = createElement(
      "div",
      {
        className: "tasklist",
      },
      [
        createElement("label", { className: "tasks" }, [
          `${toDo}`,
          createElement("input", { type: "checkbox" }),
        ]),
      ]
    );
    appElement.append(tasks);
  });

  appElement.append(titleComponent);
  appElement.append(enterToDoList);
}

createApp();
