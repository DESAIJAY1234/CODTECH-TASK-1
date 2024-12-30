// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Add Task
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      taskList.appendChild(li);
      taskInput.value = '';
  
      // Attach Delete Event
      li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
      });
    });
  });
  