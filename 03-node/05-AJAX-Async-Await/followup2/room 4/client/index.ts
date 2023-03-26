interface User {
    name: string;
    src: string;
    age:string;
  }
  
  function handleGetUsers() {
    console.log("test");
    try {
      fetch("/api/get-users")
        .then((res) => res.json())
        .then(({ users }) => {
          try {
            if (!users) throw new Error("didnt find users");
            console.log(users);
            renderUsers(users);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderUsers(users: Array<User>) {
    try {
      if (!users) throw new Error("No users");
  
      const html = users
        .map((user) => {
          return `<div class="userCard">
              <img src="${user.src}" alt="user name is ${user.name}">
              <p>${user.name}</p>
              <p>${user.age}</p>
              </div>`;
        })
        .join(" ");
      const usersElement = document.querySelector("#users");
      if (!usersElement) throw new Error("coundnt find users element on DOM");
  
      usersElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleAddUser(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const src = ev.target.elements.src.value;
      const age = ev.target.elements.src.value;
      if (!name) throw new Error("No name");
      if (!src) throw new Error("No src");
      const newUser: any = { name, src , age };
  
      //send to server:
      fetch("/api/add-user", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  