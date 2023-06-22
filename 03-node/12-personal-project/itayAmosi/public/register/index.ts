function handleRegister(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const email = ev.target.elements.email.value;
      const password = ev.target.elements.password.value;
      const phoneNumber = ev.target.elements.tel.value;
      if (!name) throw new Error("No name");
      if (!email) throw new Error("No email");
      if (!password) throw new Error("No Password");
      if (!phoneNumber) throw new Error("No tel");
      const newUser: any = { name, email, password, phoneNumber };
      window.location.href = "/login/index.html";
      fetch("/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
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

  