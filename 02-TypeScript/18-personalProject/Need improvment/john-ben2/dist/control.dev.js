"use strict";

window.addEventListener('load', function () {
  todos = JSON.parse(localStorage.getItem('todos')) || []; // const nameInput = document.querySelector('#name');

  var newTodoForm = document.querySelector('#new-todo-form'); // username =  JSON.parse(window.localStorage.getItem('name')); 
  // nameInput.value = username;
  // nameInput.addEventListener('change', (e) => {
  // 	localStorage.setItem('username', e.target.value);
  // })

  newTodoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime()
    };
    todos.push(todo);
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos)); // Reset the form

    e.target.reset();
    DisplayTodos();
  });
  DisplayTodos();
});