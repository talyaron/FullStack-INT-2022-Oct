function handleAddTask(ev) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const category = ev.target.elements.category.value;
        const description = ev.target.elements.description.value;
        const dueDate = ev.target.elements.dueDate.value;
        tasks.push(new Task(name, category, description, dueDate));
        ev.target.reset();
        renderTask(tasks);
        console.log(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
function renderTask(arr) {
    let page = "";
    for (let j = 0; j <= arr.length - 1; j++) {
        page += `<div class="taskItem"> 
              <h3>${arr.name}</h3>
              <h3>${arr.category}</h3>
              <h3>${arr.dueDate}</h3>
              </div>`;
    }
    console.log(page);
    const html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}