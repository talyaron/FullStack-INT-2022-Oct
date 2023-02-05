//-----Login Script-----//
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});
function focusFunc() {
    var parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunc() {
    var parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}
//----- Event listener
var form = document.querySelector("form");
var userName = document.querySelector("#username");
var userPassword = document.querySelector("#password");
function handleSubmit(event) {
    try {
        event.preventDefault();
        //----- Get values from the elements
        var _a = event.target.elements, username = _a.username, password = _a.password;
        if (username.value == "") {
            alert("Please enter your username");
        }
        if (password.value == "") {
            alert("Please enter your password");
        }
        if (checkUserDetails(userName.value, userPassword.value) == false) {
            alert("Incorrect username or password");
        }
        else {
            event.target.reset();
            return location.href = './userProfile.html';
        }
    }
    catch (error) {
        console.error(error);
    }
}
//----- Check user's details
function getDataFromStorage() {
    try {
        //----- Get Data from Storage
        var dataString = localStorage.getItem("users");
        // if(!dataString) throw new Error ("Couldn't find data in storage")
        //----- Convert to array
        var data = JSON.parse(dataString);
        return data;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function checkUserDetails(username, password) {
    try {
        var data = getDataFromStorage();
        for (var i = 0; i < data.length; i++) {
            if (username == data[i].username && password == data[i].password) {
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
