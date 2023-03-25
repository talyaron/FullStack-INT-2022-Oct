interface User {
  name: string;
  src: string;
  age: number;
}

function getUser() {
  try {
    fetch("/get-users")
      .then((res) => res.json())
      .then(({ users }) => {
        try {
          renderUsers(users);
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {}
}

function renderUsers(users: Array<User>) {
  try {
    if (!users) throw new Error("No users");

    const html = users
      .map((user) => {
        return `<div class="userCard">
            <img src="${user.src}" alt="user name is ${user.name} ${user.age}">
            <p>${user.name}</p>
            <p>${user.age}</p>
            </div>`;
      })
      .join(" ");
    const usersElement = document.querySelector("#user");
    if (!usersElement) throw new Error("coundnt find users element on DOM");

    usersElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}


function handleAddUsers(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const src = ev.target.elements.src.value;
    const age = ev.target.elements.age.value;
    if (!name) throw new Error("No name");
    if (!src) throw new Error("No src");
    if (!age) throw new Error("No age value");
    const newUser: any = { name, src, age };

    //send to server:
    fetch("/add-user", {
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
