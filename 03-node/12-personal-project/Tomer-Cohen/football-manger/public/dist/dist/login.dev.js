"use strict";

function handleLogin(ev) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements);
    var userName = ev.target.elements.userName.value;
    var password = ev.target.elements.password.value;
    var email = ev.target.elements.email.value;
    if (!userName) throw new Error("No userName");
    if (!password) throw new Error("No Password");
    if (!email) throw new Error("No email");
    var newUser = {
      userName: userName,
      password: password,
      email: email
    };
    console.log(userName);
    fetch("/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      ;
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}