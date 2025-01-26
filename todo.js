// Get elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const message = document.getElementById('message');

// Load saved tasks from localStorage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    addTaskToList(task.text, task.completed);
  });
};

// Add task to the list
const addTaskToList = (text, completed = false) => {
  const li = document.createElement('li');
  li.textContent = text;
  if (completed) {
    li.classList.add('completed');
  }
  // Mark task as completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateLocalStorage();
  });

  // Add delete functionality
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateLocalStorage();
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);
};

// Update localStorage after any change
const updateLocalStorage = () => {
  const tasks = [];
  document.querySelectorAll('li').forEach(li => {
    const taskText = li.firstChild.textContent;
    const isCompleted = li.classList.contains('completed');
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Handle add task functionality
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToList(taskText);
    taskInput.value = ''; // Clear the input field
    updateLocalStorage(); // Save to localStorage
    message.textContent = "Task added successfully!";
  } else {
    message.textContent = "Please enter a task!";
    message.style.color = "red";
  }
});

// Initialize app by loading tasks from localStorage
loadTasks();
