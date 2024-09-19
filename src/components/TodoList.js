import TodoItem from '../components/TodoItem.js';

export default class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(description) {
    const newItem = new TodoItem(description);
    this.items.push(newItem);
    this.render();
  }

  
  render() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    this.items.forEach((item, index) => {
      const listItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = item.description;
      taskText.style.textDecoration = item.completed ? 'line-through' : 'none';
      const completeButton = document.createElement('button');
      completeButton.textContent = item.completed ? 'Mark Incomplete' : 'Mark Complete';
      completeButton.addEventListener('click', () => {
        this.toggleComplete(index);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        this.removeItem(index);
      });

      listItem.appendChild(taskText);
      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  }

  toggleComplete(index) {
    this.items[index].completed = !this.items[index].completed;
    this.render();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.render();
  }
}
