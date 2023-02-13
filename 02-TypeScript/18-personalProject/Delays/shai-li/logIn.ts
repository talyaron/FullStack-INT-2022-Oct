const form: HTMLElement | null = document.querySelector("#loginForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addUser();
  });
}


function addUser() {
  let username = (<HTMLInputElement>document.getElementById("username")).value;
  let password = (<HTMLInputElement>document.getElementById("password")).value;
  const matchingUser = users.find(
    (existingUser) => existingUser.username === username
  );
  if (!matchingUser) {
    let user = new User(username, password);
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    if (matchingUser.password !== password) {
      alert("Wrong Password!");
      return;
    }
  }
  localStorage.setItem("current-user", username);
  window.location.assign("./index.html");
}


