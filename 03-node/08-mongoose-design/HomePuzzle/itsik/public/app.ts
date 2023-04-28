interface User {
    name: string;
    fname: string;
    phone: number;
    email: string;
    _id?: string;
  }


function handleAddUser(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const fname = ev.target.elements.fname.value;
    const phone = ev.target.elements.phone.value;
    const email = ev.target.elements.email.value;
    const newStudent: any = {name, fname, phone, email}

     
    fetch("/api/users/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
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