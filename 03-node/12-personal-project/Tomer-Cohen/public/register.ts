interface User{
    userName:string,
    password:string,
    email?:string,
    _id?:string,
    uid?:string
}
function handleAddUser(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const userName = ev.target.elements.userName.value;
      const password = ev.target.elements.password.value;
      if (!userName) throw new Error("No name");
      if (!password) throw new Error("No Password");
      const newUser: any = { userName, password };
  
      fetch("/api/user/add-user", {
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