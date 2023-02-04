let homePage = "";
for (let j = 0; j <= availbleUsers.length - 1; j++) {
  homePage += `<div class="userItem"> 
            ${availbleUsers[j].name}
            <button onclick="renderTaskPerUser('${availbleUsers[j].uid}',availbleUsers)">showTasksPerUser</button>
          </div>`;
}
console.log(availbleUsers);
console.log(homePage);
const html: HTMLDivElement | null = document.querySelector("#exsistingUsers");
if (html !== null) {
  html.innerHTML = homePage;
  console.log(html);
}

function handleAddUser(ev: any) {
  debugger;
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const nickName = ev.target.elements.nickName.value;
    const pictureURL = ev.target.elements.pictureURL.value;
    users.push(new User(name, nickName, pictureURL));
    ev.target.reset();
    renderUser(users);
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

function renderUser(users: User[]): void {
  let page = "";
  for (let j = 0; j <= users.length - 1; j++) {
    page += `<div class="userItem"> 
              ${users[j].name}
              <button onclick="renderTaskPerUser('${users[j].uid}',users)">showTasksPerUser</button>
            </div>`;
  }
  const html: HTMLDivElement | null = document.querySelector("#newUsers");
  if (html !== null) {
    html.innerHTML = page;
    console.log(html);
  }
}

function renderTaskPerUser(uid: string, arr: User[]): void {
  debugger;
  let page = "";
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[j].uid === uid && arr[j].taskObjArr.length >= 1) {
      for (let i = 0; i <= arr[j].taskObjArr.length - 1; i++) {
        page += `<div class="taskItem">
              <button onclick="handleAddTask('${availbleUsers[j].uid}',users)">addTask</button> 
              <h3>name: ${arr[j].taskObjArr[i].name}</h3>
              <h3>category:${arr[j].taskObjArr[i].category}</h3>
              <h3>Description:${arr[j].taskObjArr[i].description}</h3> <button onclick="handleUpdateItem('${arr[j].uid}')">Update</button>
              <button onclick="handleDeleteItem('${arr[j].uid}',users,'${arr[j].name}')">Remove</button>
              </div>`;
      }
    }
    else {  
      "no previous taks"
      page += `<div class="taskItem">
        <button onclick="handleAddTask('${arr[j].uid}',users)">addTask</button> 
        <button onclick="handleUpdateItem('${arr[j].uid}')">Update</button>
        <button onclick="handleDeleteItem('${arr[j].uid}',users,'${arr[j].name}')">Remove</button>
        </div>`;
    }
  }
  console.log(page);
  const html: HTMLDivElement | null = document.querySelector("#list");
  if (html !== null) {
    html.innerHTML = page;
    console.log(html);
  }
}

function handleAddTask(uid:string,users:User[]) {
  try {
    const name = prompt("enter your name");
    const category = prompt("enter the category");
    const description = prompt("enter a description");
    if (name!=null && category!=null && description!=null){
    for (let j = 0; j <= users.length - 1; j++) {
      if (users[j].uid===uid){
        users[j].taskObjArr.push(new Task(name, category, description))
        renderTaskPerUser(users[j].uid,users)  
      }   
}
  }
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error(error);
  }
}

  function handleDeleteItem(uid:string,users:User[],name:string) {
    try {
      debugger;
      for (let j = 0; j <= users.length - 1; j++) {
        if (users[j].uid===uid){
          for (let i = 0; i <= users[j].taskObjArr.length - 1; i++){
            if (users[j].taskObjArr[i].name===name) {
               users[j].taskObjArr.splice(i, 1);
            }
          }
         
        }   
       renderTaskPerUser(uid,users)  
      localStorage.setItem("users", JSON.stringify(users))
      }
    } catch (error) {
      console.error(error);
    }
  }


//   function handleUpdateItem(uid: string) {
//     try {
//       let description;
//       description= prompt ("Enter a new description:");
//       const index = tasksDad.findIndex((Task) => Task.uid === uid);
//       if (index === -1) throw new Error("task not found");
//       if (description)
//       tasksDad[index].description= description;

//       renderTask(tasksDad);
//     } catch (error) {
//       console.error(error);
//     }
//   }
