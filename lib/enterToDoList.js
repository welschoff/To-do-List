import { createElement } from "./elements.js";

export function createEnterToDoList() {
  // Creates <input type="date" />
  const toDoInput = createElement("input", {
    type: "text",
    placeholder: "Enter your Task",
  });

  const submitButton = createElement("button", {
    type: "submit",
    textContent: "Submit",
  });

  return toDoInput;
}
