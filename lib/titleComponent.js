import { createElement } from "./elements.js";

// Creates the title component
export function createTitleComponent() {
  const titleElement = createElement("h1", {
    textContent: "To-Do-List",
    className: "title",
  });

  // Return it
  return titleElement;
}
