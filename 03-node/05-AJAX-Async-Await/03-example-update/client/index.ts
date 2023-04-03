interface User {
  name: string;
  src: string;
  uid?: string;
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
        return renderUser(user);
      })
      .join(" ");
    const usersElement = document.querySelector("#users");
    if (!usersElement) throw new Error("coundnt find users element on DOM");

    usersElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderUser(user: User) {
  try {
    return `<div class="userCard">
            <img src="${user.src}" alt="user name is ${user.name}">
            <p contenteditable oninput="handleUserNameUpdate(event, '${user.uid}')">${user.name}</p>
            <button onclick='handleDeleteUser("${user.uid}")'>DELETE</button>
            </div>`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleUserNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/update-user-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid }),
    });
  } catch (error) {
    console.error(error);
  }
}

function handleAddUser(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const src = ev.target.elements.src.value;
    if (!name) throw new Error("No name");
    if (!src) throw new Error("No src");
    const newUser: any = { 
      name, 
      src
     };

    //send to server:
    fetch("/api/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

function handleDeleteUser(uid: string) {
  try {
    console.log(uid);

    fetch("/api/delete-user", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    })
      .then((res) => res.json())
      .then(({ users }) => {
      
      
        renderUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
