var form = document.querySelector("#myForm");
function hendleAddDetail(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.valueAsNumber;
        var password = ev.target.elements.pass.value;
        var image = ev.target.elements.image.value;
        details.push(new detail(name, address, email, phone, password, image));
        console.log(details);
        randelDetails();
    }
    catch (error) {
        console.error(error);
    }
}
function randelDetails() {
    try {
        for (var i = 0; i < details.length; i++) {
            var userDetail = document.querySelector(".detail");
            userDetail.innerHTML += "<div class=\"userDiv\">Name: " + details[i].name + " </div>";
            userDetail.innerHTML += "<div class=\"userDiv\">Address: " + details[i].address + "</div>";
            userDetail.innerHTML += "<div class=\"userDiv\">Email: " + details[i].email + "</div>";
            userDetail.innerHTML += "<div class=\"userDiv\">Phone: " + details[i].phone + "</div>";
            userDetail.innerHTML += "<div class=\"userDiv\">Password: " + details[i].password + "</div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function hendelChangeColor(ev) {
    try {
        var color = ev.target.value;
        document.body.style.backgroundColor = color;
    }
    catch (error) {
        console.error(error);
    }
}
function hendelViewPassword() {
    try {
        var passwordElement = document.querySelector("#pass");
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
        }
    }
    catch (error) {
        console.error(error);
    }
}
