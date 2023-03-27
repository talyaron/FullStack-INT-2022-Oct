renderTasks(tasks.filter((task) => task.username === username));

if(usernamePlaceholder){
  usernamePlaceholder.innerText = `Hello ${username} - `;
}
