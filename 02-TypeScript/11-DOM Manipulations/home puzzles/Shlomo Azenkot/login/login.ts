let btn = document.querySelector(".enter") as HTMLButtonElement;

btn.addEventListener("click", (e) => {
  let inputName = (document.querySelector(".input_name") as HTMLInputElement)
    .value;

    localStorage.setItem("input_name", inputName);
    

  let errorName = document.querySelector(".error_name") as HTMLSpanElement;
  let errorPassword = document.querySelector(
    ".error_password"
  ) as HTMLSpanElement;
  let errorEmail = document.querySelector(".error_email") as HTMLSpanElement;

  let regularExpressionName_0 = /[0-9]+/;
  let testnumber = regularExpressionName_0.test(inputName);
  if (inputName) {
    if (testnumber === true) {
      errorName.innerHTML = "** Enter name without numbers ";
    }
  }

  let regularExpressionName_1 = /\s/;
  let testnumber_1 = regularExpressionName_1.test(inputName);
  if (inputName) {
    if (testnumber_1 === false && testnumber === false) {
      errorName.innerHTML = "** Please enter full name ";
    }
  }

  let regularExpressionName_2 = /[\W\S_]/;
  let testnumber_2 = regularExpressionName_2.test(inputName);
  if (inputName) {
    if (
      testnumber_2 === false &&
      testnumber === false &&
      testnumber_1 === true
    ) {
      errorName.innerHTML = "** These characters are not valid for a username ";
    }
  }

  // ---------------------------------------------

  let inputPassword = (
    document.querySelector(".input_password") as HTMLInputElement
  ).value;

  if (inputPassword.length < 5 || inputPassword.length > 20) {
    errorPassword.innerHTML = `** The password must be between <br> 5 and 20 characters`;
  }

  let regularExpressionName_3 = /[A-Z]+/;
  let testnumber_3 = regularExpressionName_3.test(inputPassword);
  if (
    testnumber_3 === false &&
    inputPassword.length > 5 &&
    inputPassword.length < 20
  ) {
    errorPassword.innerHTML = "** The password must contain capital letters";
  }

  let regularExpressionName_4 = /\s/;
  let testnumber_4 = regularExpressionName_4.test(inputPassword);
  if (
    testnumber_4 === true &&
    inputPassword.length > 5 &&
    inputPassword.length < 20 &&
    testnumber_3 === true
  ) {
    errorPassword.innerHTML = "** Password cannot contain the space character";
  }

  // ------------------------------------------------

  let inputEmail = (document.querySelector(".input_emaul") as HTMLInputElement)
    .value;
  let regularExpressionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let testnumber_5 = regularExpressionEmail.test(inputEmail);
  if (testnumber_5 === false) {
    errorEmail.innerHTML = "**The email is invalid";
  }

  if (
    testnumber === false &&
    testnumber_1 === true &&
    testnumber_2 === true &&
    inputPassword.length > 5 &&
    inputPassword.length < 20 &&
    testnumber_3 === true &&
    testnumber_4 === false &&
    testnumber_5 === true
  ) {
    window.open("../shop/index.html");
    window.parent.close();
  }
});
