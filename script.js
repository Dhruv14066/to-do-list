const add_task = document.querySelector('.add');
const list = document.querySelector('#all-task');
const task = document.querySelector('.task');
const toggleButton = document.getElementById('dark-change');
const body = document.body;
const completedTasks = document.querySelector('#completed-tasks');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('active');
});

let i = 0;

add_task.addEventListener('click', () => {
    if (task.value === "") {
        alert("Please enter a task");
    } else {
        i++;
        list.innerHTML += `<div class="in">
            <input type="checkbox" class="task-checkbox">
            <label for="input">Task:</label>
            <p id="todo">${task.value}</p>
            <button type="submit" class="del">Delete</button>
            <button type="submit" class="Edit">Edit</button>
        </div>`;
        task.value = "";
    }
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        e.target.parentElement.remove();
        i--;
    } else if (e.target.classList.contains('Edit')) {
        const parentDiv = e.target.parentElement;
        const taskP = parentDiv.querySelector('#todo');
        const currentTask = taskP.textContent;
        taskP.innerHTML = `<input type="text" class="edit-task-input" value="${currentTask}">
                            <button type="button" class="save">Save</button>`;

        e.target.style.display = 'none';
        const saveButton = parentDiv.querySelector('.save');
        saveButton.addEventListener('click', () => {
            const newTaskValue = parentDiv.querySelector('.edit-task-input').value;
            taskP.textContent = newTaskValue;
            e.target.style.display = 'inline';
        });
    }
});
completedTasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        e.target.parentElement.remove();
        i--;
    }
});
list.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
        const parentDiv = e.target.parentElement;
        const taskP = parentDiv.querySelector('#todo');
        const task1val = taskP.textContent;
        if (e.target.checked) {
            completedTasks.innerHTML += `<div class="in">
                <p id="todo">${task1val}</p>
                <button type="submit" class="del">Delete</button>
            </div>`;
            parentDiv.remove();
        }
    }
});
