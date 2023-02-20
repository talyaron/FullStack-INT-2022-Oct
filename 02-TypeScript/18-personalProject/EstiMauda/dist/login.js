var form = document.querySelector("#form");
console.log(form);
function handleLogin(event) {
    try {
        if (!event)
            throw new Error("Form Empty");
        event.preventDefault();
        console.log(event);
        var userName = event.target.elements.username.value;
        var password = event.target.elements.password.value;
        var passwordRepeat = event.target.elements.passwordRepeat.value;
        var level = event.target.elements.level.value;
        console.log("pass " + password + " passR " + passwordRepeat + " userName log" + userName);
        var passwordSame = true;
        do {
            if (passwordRepeat != password) {
                event.target.elements.password.value = "";
                event.target.elements.passwordRepeat.value = "";
                alert("The password is not same Try again");
            }
        } while (!passwordSame);
        console.log(userName);
        users.push(new Users(userName, password, level));
        console.log(users);
        var tmpUser = users[users.length - 1].userName + "-" + users[users.length - 1].level;
        var setStorg = localStorage.setItem("user", tmpUser);
        location.href = 'soduko.html';
    }
    catch (error) {
        console.error(error);
    }
}
// function renderUsers(users: Users[]): void {
//   try {
//     if (!users || !Array.isArray(users))
//       throw new Error("items is not an array");
//       // const storgUser = localStorage.setItem("user", )
//   } catch (error) {
//     console.error(error);
//   }
// }
// // function handleAddUsers(ev: any) {
//   try {
//       ev.preventDefault();
//       console.log(ev);
//       const name = ev.target.elements.name.value;
//       const password = ev.target.elements.password.valueAsNumber;
//       users.push(new Users(userName, password, level));
//       localStorage.setUsers('users',JSON.stringify(users));
//       console.log(users);
//       ev.target.reset();
//       console.log(name);
//       if (!`ditail`) throw new Error("usersRoot is null");
//       renderusers(users, "ditail");
//   } catch (error) {
//       console.error(error);
//   }
// }
// function handleSaveItems(){
//   console.log('save items');
//   localStorage.setItem('items',JSON.stringify(items));
// }
function handleViewPassword(classNAme) {
    try {
        var passwordElement = document.querySelector(classNAme);
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
            console.log(passwordElement.type);
        }
        else {
            passwordElement.type = "password";
            console.log(passwordElement.type);
        }
    }
    catch (error) {
        console.error(error);
    }
}
// function renderusers(users: Users[], renderElementId: string): void {
//   try {
//     if (!users || !Array.isArray(users))
//       throw new Error("users is not an array");
//     const html = users
//       .map((Users) => {
//         return `
//     <div class="Users">
//       <h3>${Users.userName}</h3>
//       <div>level: ${Users.password}</div>
//     </div>
//     `;
//       })
//       .join(" ");
//     console.log(html);
//     const element = document.querySelector(`#${renderElementId}`);
//     if (!element) throw new Error("Couldnt find element in the DOM");
//     element.innerHTML = html;
//   } catch (error) {
//     console.error(error);
//   }
// }
// function handleDeleteUsers(uid: string) {
//   try {
// console.log(uid);
// const index = users.findIndex((Users) => Users.uid === uid);
// if (index === -1) throw new Error("Users not found");
// users.splice(index, 1);
// if (!usersRoot) throw new Error("UsersRoot is undefined");
// renderusers(users, "usersRoot");
// // localStorage.setUsers("users", JSON.stringify(users))
//   } catch (error) {
//     console.error(error);
//   }
// }
// function handleSaveusers(){
//   console.log('save users');
// localStorage.setUsers('users',JSON.stringify(users));
// }
// renderUsers(users, "usersRoot");
