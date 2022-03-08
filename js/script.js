const list = document.querySelector("[data-list]");
const taskInput = document.querySelector("[data-add-task]");
const task = document.querySelector("[data-task]");
const buttonAdd = document.querySelector("[data-add-button]");
const buttonRemove = document.querySelector("[data-remove-button]");

// ADD TASK

buttonAdd.addEventListener("click", () => {
  let inputValue = taskInput.value;
  inputValue;

  if (!inputValue) return;

  const li = document.createElement("li");
  const input = document.createElement("input");
  const p = document.createElement("p");

  input.setAttribute("type", "checkbox");
  li.classList.add("task");

  li.appendChild(input);
  li.appendChild(p);
  list.appendChild(li);

  p.textContent += inputValue;

  if (taskInput.value) {
    taskInput.value = "";
  }
});

// MARK AS FINISHED

list.addEventListener("change", () => {
  const tasks = list.querySelectorAll("li");

  tasks.forEach((task) => {
    const checkbox = task.firstElementChild;
    const p = task.lastElementChild;

    if (checkbox.checked) {
      p.classList.add("task-finished");
    } else {
      p.classList.remove("task-finished");
    }
  });
});

// REMOVE ALL FINISHED

buttonRemove.addEventListener("click", () => {
  const tasks = list.querySelectorAll("li");
  tasks.forEach((task) => {
    const checkbox = task.firstElementChild;
    if (checkbox.checked) {
      const li = checkbox.parentElement;
      li.parentNode.removeChild(li);
    }
  });
});

const bold = document.querySelector("[data-bold]");

bold.addEventListener("click", () => {
  const span = document.createElement("span");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const p = task.lastElementChild;

  if (p.firstElementChild) {
    p.firstElementChild.classList.remove("bold");
  }

  const surround = range.surroundContents(span);
  if (range.commonAncestorContainer != task.lastElementChild) {
    return;
  }
  span.classList.add("bold");
});

// TRY TO COPY SPAN TEXT CONTENT => ADD TO PARENT => REMOVE SPAN
