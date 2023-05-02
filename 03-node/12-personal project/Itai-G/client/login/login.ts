function handleLogin (ev: any){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        if(!name) throw new Error("no name");
        if(!password) throw new Error("no password");
        const newUser: any = {name, password};
        window.location.href = "../main/main.html"
        fetch("/api/users/login",{
            method:"POST",
            headers:{
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