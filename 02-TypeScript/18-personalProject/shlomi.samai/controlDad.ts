let page = "";
for (let j = 0; j <= availbleUsers.length - 1; j++) {
  page += `<div class="userItem"> 
            ${availbleUsers[j].name}
          </div>`;
}

console.log(page);
const html: HTMLDivElement | null = document.querySelector("#exsistingUsers");
if (html !== null) {
  html.innerHTML = page;
  console.log(html);
}

function handleAddTask(ev) {
    try {

        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const category = ev.target.elements.category.value;
        const description = ev.target.elements.description.value;
        const dueDate = ev.target.elements.dueDate.value;

        tasksDad.push(new Task(name, category, description, dueDate))
        localStorage.setItem('tasksDad',JSON.stringify(tasksDad));
        ev.target.reset();
        renderTask(tasksDad)
        console.log(tasksDad)
    }
    catch (error) {
        console.error(error)
    }
}

function handleAddUser(ev) {
    try {

        ev.preventDefault();
        let name = ev.target.elements.name.value;
        const nickName = ev.target.elements.nickName.value;
        const pictureURL = ev.target.elements.pictureURL.value;
        const tasks=ev.target.elements.tasksArr.value;
        users.push(new User(name, nickName, pictureURL,tasks))
        ev.target.reset();

        renderUser(users)
        console.log(users)
    }
    catch (error) {
        console.error(error)
    }
}

function renderTask(arr:Task[]):void {
    console.log(arr);
    let page = "";
    for (let j = 0; j <= arr.length - 1; j++) {
      page += `<div class="taskItem"> 
              <h3>name: ${arr[j].name}</h3>
              <h3>category:${arr[j].category}</h3>
              <h3>Description:${arr[j].description}</h3> <button onclick="handleUpdateItem('${arr[j].uid}')">Update</button></div>
              <h3>Duedate:${arr[j].dueDate}</h3>
              <button onclick="handleDeleteItem('${arr[j].uid}')">Remove</button>
              </div>`;
    }

    console.log(page);
    const html: HTMLDivElement | null = document.querySelector("#list");
    if (html !== null) {
      html.innerHTML = page;
      console.log(html);
    }
  }

  function renderUser(arr:User[]):void {
    console.log(arr);
    let page = "";
    for (let j = 0; j <= arr.length - 1; j++) {
      page += `<div class="taskItem"> 
              <h3>name: ${arr[j].name}</h3>
              <h3>Nickname:${arr[j].nickName}</h3>
              <h3>Picture:${arr[j].pictureURL}</h3>
              </div>`;
    }

    console.log(page);
    const html: HTMLDivElement | null = document.querySelector("#users");
    if (html !== null) {
      html.innerHTML = page;
      console.log(html);
    }
  }

  function handleDeleteItem(uid: string) {
    try {
      console.log(uid);
      const index = tasksDad.findIndex((Task) => Task.uid === uid);
      if (index === -1) throw new Error("item not found");
      tasksDad.splice(index, 1);
      renderTask(tasksDad);
      localStorage.setItem("tasksDad", JSON.stringify(tasksDad))
      
    } catch (error) {
      console.error(error);
    }
  }

  function handleUpdateItem(uid: string) {
    try {
      let description;
      description= prompt ("Enter a new description:");
      const index = tasksDad.findIndex((Task) => Task.uid === uid);
      if (index === -1) throw new Error("task not found");
      if (description)
      tasksDad[index].description= description;
  
      renderTask(tasksDad);
    } catch (error) {
      console.error(error);
    }
  }