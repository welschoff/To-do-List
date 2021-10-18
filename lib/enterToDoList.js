import { createElement } from "./elements.js";

export function createEnterToDoList(onSubmit) {
  // Creates <input type="date" />
  const toDoInput = createElement("input", {
    type: "text",
    required: true,
    placeholder: "Add Task",
  });

  const submitButton = createElement("button", {
    type: "submit",
    textContent: "Submit",
  });

  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (currywurst) {
        currywurst.preventDefault();
        onSubmit(toDoInput.value);
        toDoInput.value = "";
      },
    },
    [toDoInput, submitButton]
  );

  return formElement;
}
