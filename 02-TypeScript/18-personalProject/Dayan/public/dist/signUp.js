//-----SignUp Script-----//
var form = document.querySelector("form");
var userEmail = document.querySelector("#email");
//----- Event listener
function handleAddDetail(event) {
    try {
        event.preventDefault();
        //----- Get values from the elements
        var _a = event.target.elements, name = _a.name, username = _a.username, email = _a.email, phone = _a.phone, password = _a.password, gender = _a.gender;
        if (checksIfUserExists(userEmail.value) == false) {
            alert("This email is already exist");
        }
        else {
            users.push(new User(name.value, username.value, email.value, phone.value, password.value, gender.value));
            /* The setItem method is used to store a key-value pair in the
            localStorage object of a web browser.
            */
            localStorage.setItem('users', JSON.stringify(users));
            console.log(users);
            /* The reset method of an event target (usually a form element)
            is used to reset all its controls to their initial values.
            */
            event.target.reset();
            return location.href = './login.html';
        }
    }
    catch (error) {
        console.error(error);
    }
}
//----- Password verification test
//----- Check is the user is already exist
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
function checksIfUserExists(email) {
    try {
        var data = getDataFromStorage();
        for (var i = 0; data.length; i++) {
            // console.log(email + "," + data[i].email)
            if (email == data[i].email) {
                return false;
            }
        }
        return true;
    }
    catch (error) {
        console.error(error);
    }
}
