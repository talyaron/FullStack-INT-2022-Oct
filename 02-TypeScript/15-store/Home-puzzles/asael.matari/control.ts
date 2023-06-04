const form=document.getElementsByClassName("form")








 function render(users:UserDetail[]):string|undefined{
    try {
        if(!arrayOfUsers)throw new Error("you don't insert a variable")
        const html = users.map((user)=>{
            return `<div class="item" style="background-color:${user.color}">
            <h3>${user.fullName}</h3>
            <div>Email: ${user.email} </div>
            <div><img src=" ${user.url}"></div>
            <div>Password: ${user.password}</div>
            <div>Color: ${user.color}</div>
            <button onclick="handleDeleteUser('${user.uid}')">Remove</button>
          </div>
          `
        }).join(" ");
        return html


    
function handleDeleteUser(uid: string) {
    try {
      console.log(uid);
      const index = arrayOfUsers.findIndex((user) => user.uid === uid);
      if (index === -1) throw new Error("item not found");
      arrayOfUsers.splice(index, 1);
  
      if (!container) throw new Error("container is undefined");
      container.innerHTML = render(arrayOfUsers);
    } catch (error) {
      console.error(error);
    }
  }
