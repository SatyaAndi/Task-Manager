document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const task = {
      name: document.getElementById('taskName').value,
      deadline: document.getElementById('taskDeadline').value,
    };
  
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  
    document.getElementById('taskForm').reset();
    loadTasks();
  });
  
  async function loadTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    document.getElementById('taskList').innerHTML = tasks.map(task => `
      <li>${task.name} - ${task.deadline}</li>
    `).join('');
  }
  
  loadTasks();
  