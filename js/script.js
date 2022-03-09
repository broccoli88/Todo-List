function todo() {
  const list = document.querySelector("[data-list]");
  const taskInput = document.querySelector("[data-add-task]");
  const task = document.querySelector("[data-task]");
  const buttonAdd = document.querySelector("[data-add-button]");
  const buttonRemove = document.querySelector("[data-remove-button]");

  // ADD TASK

  function addTask() {
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
  }

  addTask();

  // MARK AS FINISHED

  function markAsFinished() {
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
  }

  markAsFinished();

  // REMOVE ALL FINISHED

  function removeAllFinished() {
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
  }

  removeAllFinished();
}

todo();
