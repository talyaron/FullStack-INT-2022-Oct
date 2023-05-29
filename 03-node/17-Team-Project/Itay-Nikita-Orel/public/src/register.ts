function handleSubmitRegisterForm(ev: any) {
  try {
    ev.preventDefault();
    const container__form = document.querySelector(".container__form");
    const userNotification:any = document.querySelector(".userNotification");
    if (!container__form) throw new Error("DOM Error");
    const firstName = ev.target.elements.firstName.value;
    const lastName = ev.target.elements.lastName.value;
    const userName = ev.target.elements.userName.value;
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    const cPassword = ev.target.elements.cPassword.value;
    if (!firstName) throw new Error("No firstName");
    if (!lastName) throw new Error("No lastName");
    if (!userName) throw new Error("No userName");
    if (!email) throw new Error("No email");
    if (!password) throw new Error("No password");
    if (!cPassword) throw new Error("No cPassword");
    const newUser = {
      firstName,
      lastName,
      email,
      userName,
      password,
      cPassword,
    };
    if (password !== cPassword) {
      if (!userNotification) {
        container__form.insertAdjacentHTML(
          "afterend",
          "<p class='userNotification'>Passwords don't match<p>"
        );
      } else {
        userNotification.innerText = "Passwords don't match";
      }
      throw new Error("Password must be at least 4 characterst");
    }
    if (password.length < 4) {
      if (!userNotification) {
        container__form.insertAdjacentHTML(
          "afterend",
          '<p class="userNotification">Password must be at least 4 characterst<p>'
        );
      } else {
        userNotification.innerText = "Password must be at least 4 characterst";
      }
      throw new Error("Password must be at least 4 characterst");
    }
    fetch("/api/users/create-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          if (!userNotification) {
            container__form.insertAdjacentHTML(
              "afterend",
              `<p class="userNotification">${data.error}<p>`
            );
          } else {
            userNotification.innerText = `${data.error}`;
          }

          throw new Error(data.error);
        }

        window.location.href = "/login.html";
      });
  } catch (error) {
    console.error(error);
  }
}
