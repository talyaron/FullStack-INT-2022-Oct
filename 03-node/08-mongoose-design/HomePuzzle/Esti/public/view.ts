interface User {
    name: string;
    password: string;
    uid?: string;
    _id?: string;
  }
  
  function renderUsers(users: Array<User>) {
    try {
      if (!users) throw new Error("No users");
  
      const html = users
        .map((user) => {

            return renderUser(user);
        })
        .join(" ");
      const usersElement = document.querySelector(".container");
      if (!usersElement) throw new Error("coundnt find users element on DOM");
  
      usersElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderUser(user: User) {
    try {
      console.log(user);
  
      return `<div class="userCard">
              <p contenteditable="true" oninput="handleUserNameUpdate(event, '${user.uid}')">${user.name}</p>
              <button onclick='handleDeleteUser("${user._id}")'>DELETE</button>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
