
interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  _id: string;
}


export function handleLogin(ev: any) {
    try {
      ev.preventDefault();
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;
      if (!email) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const loginUser: any = { email, password };

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
          if(data.error) {
          alert(data.error)
          return
          }
          const {password, ...currentUser} = data.userDB
          localStorage.setItem("currentUser", JSON.stringify(currentUser))
          //save user without password in cookies
          window.location.href = "/main/index.html";
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }



  
