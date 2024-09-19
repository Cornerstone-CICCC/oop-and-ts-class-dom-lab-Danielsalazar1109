import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import TodoItem from './components/TodoItem.js';

document.addEventListener('DOMContentLoaded', () => {
  const todoList = new TodoList();
  const addTodo = new AddTodo(todoList);
  addTodo.init();
  todoList.render(); 
});