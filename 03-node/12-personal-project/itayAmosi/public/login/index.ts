import {User} from "../../API/user/usersModel"

export function handleLogin(ev: any, user:User) {
    try {
      ev.preventDefault();
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;
      if (!email) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const loginUser: any = { email, password };
      // if(password === user.password) throw new Error("password incorrect");
      window.location.href = "/main/index.html";
      //send to server:
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      })
        .then((res) => res.json())
        .then((data) => {
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }



  
