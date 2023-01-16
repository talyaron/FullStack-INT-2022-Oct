var btn = document.querySelector(".enter");
btn.addEventListener("click", function (e) {
    var inputName = document.querySelector(".input_name")
        .value;
    localStorage.setItem("input_name", inputName);
    var errorName = document.querySelector(".error_name");
    var errorPassword = document.querySelector(".error_password");
    var errorEmail = document.querySelector(".error_email");
    var regularExpressionName_0 = /[0-9]+/;
    var testnumber = regularExpressionName_0.test(inputName);
    if (inputName) {
        if (testnumber === true) {
            errorName.innerHTML = "** Enter name without numbers ";
        }
    }
    var regularExpressionName_1 = /\s/;
    var testnumber_1 = regularExpressionName_1.test(inputName);
    if (inputName) {
        if (testnumber_1 === false && testnumber === false) {
            errorName.innerHTML = "** Please enter full name ";
        }
    }
    var regularExpressionName_2 = /[\W\S_]/;
    var testnumber_2 = regularExpressionName_2.test(inputName);
    if (inputName) {
        if (testnumber_2 === false &&
            testnumber === false &&
            testnumber_1 === true) {
            errorName.innerHTML = "** These characters are not valid for a username ";
        }
    }
    // ---------------------------------------------
    var inputPassword = document.querySelector(".input_password").value;
    if (inputPassword.length < 5 || inputPassword.length > 20) {
        errorPassword.innerHTML = "** The password must be between <br> 5 and 20 characters";
    }
    var regularExpressionName_3 = /[A-Z]+/;
    var testnumber_3 = regularExpressionName_3.test(inputPassword);
    if (testnumber_3 === false &&
        inputPassword.length > 5 &&
        inputPassword.length < 20) {
        errorPassword.innerHTML = "** The password must contain capital letters";
    }
    var regularExpressionName_4 = /\s/;
    var testnumber_4 = regularExpressionName_4.test(inputPassword);
    if (testnumber_4 === true &&
        inputPassword.length > 5 &&
        inputPassword.length < 20 &&
        testnumber_3 === true) {
        errorPassword.innerHTML = "** Password cannot contain the space character";
    }
    // ------------------------------------------------
    var inputEmail = document.querySelector(".input_emaul")
        .value;
    var regularExpressionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testnumber_5 = regularExpressionEmail.test(inputEmail);
    if (testnumber_5 === false) {
        errorEmail.innerHTML = "**The email is invalid";
    }
    if (testnumber === false &&
        testnumber_1 === true &&
        testnumber_2 === true &&
        inputPassword.length > 5 &&
        inputPassword.length < 20 &&
        testnumber_3 === true &&
        testnumber_4 === false &&
        testnumber_5 === true) {
        window.open("../shop/index.html");
        window.parent.close();
    }
});
