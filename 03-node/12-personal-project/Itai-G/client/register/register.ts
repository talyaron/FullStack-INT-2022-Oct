interface User {
    name: string;
    email:string;
}

function handleAddUser(ev) {
    ev.preventDefault(); 
  
    try {
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
  
      if (!name) throw new Error("No name!");
      if (!password) throw new Error("No password!");
      if (!email) throw new Error("No email!");
  
      const newUser = { name, password, email };
  
      fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => {
          if (res.ok) {
            console.log("User registered successfully!");
            window.location.href = "http://localhost:3000/login/login.html";
          } else {
            throw new Error("Failed to register user");
          }
        })
        .catch((error) => {
          console.error("Could not complete the registration:", error);
        });
    } catch (error) {
      console.error("Could not complete the add user:", error);
    }
  }