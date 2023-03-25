function handleAdminLogin(ev){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        if (!name) throw new Error("No name enterd");
        if (!password) throw new Error("No password enterd");

        


        if(name === "amit" && password === "123"){
            console.log("ok")
        }
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
      const newUser: any = { name, src };
  
      //send to server:
      fetch("/api/users'", {
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