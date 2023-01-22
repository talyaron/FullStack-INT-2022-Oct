
function createNewTask(addTask){
    const title = prompt('Please enter a title')
    const description = prompt('Please enter a description')
    if(title && description && addTask){
        let task = `<div class="task">
        <p>${title}</p>
        <p>${description}</p>
        <button>Done!</button>
        </div>`;


        addTask.innerHTML += task;
    }
}

tasks1Button?.addEventListener('click', addTasks1 => {
    createNewTask(tasks1)
})
tasks2Button?.addEventListener('click', addTasks2 => {
    createNewTask(tasks2)
})
tasks3Button?.addEventListener('click', addTasks3 => {
    createNewTask(tasks3)
})