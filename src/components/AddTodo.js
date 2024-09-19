export default class AddTodo {
  constructor(todoList) {
    this.todoList = todoList;
  }
  init() {
    const app = document.getElementById('app');
    const container = document.createElement('div');
    container.classList.add('todo-container');
    const title = document.createElement('h2');
    title.textContent = 'My To Dos';
 
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'new-task';
    input.placeholder = 'Enter task details...';

    const addButton = document.createElement('button');
    addButton.id = 'add-task-btn';
    addButton.textContent = 'Add To Do';

    const taskList = document.createElement('ul');
    taskList.id = 'task-list';

    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(addButton);
    container.appendChild(taskList);
    app.appendChild(container);
    addButton.addEventListener('click', () => this.addTask(input.value));
  }

  addTask(taskDescription) {
    if (taskDescription.trim() !== '') {
      this.todoList.addItem(taskDescription);
      document.getElementById('new-task').value = '';
    }
  }
}
