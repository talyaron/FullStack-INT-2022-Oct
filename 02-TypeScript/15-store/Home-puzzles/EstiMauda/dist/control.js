var form = document.querySelector(".myForm");
function hendleAddDetail(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.valueAsNumber;
        var password = ev.target.elements.password.value;
        var image = ev.target.elements.image.value;
        console.log("name-" + name + " address-" + address);
        details.push(new detail(name, address, email, phone, password, image));
        console.log(details);
        displayInDom(details);
    }
    catch (error) {
        console.error(error);
    }
}
function displayInDom(details) {
    try {
        for (var i = 0; i < detailName.length; i++) {
            var creatDiv = document.createElement("detailDiv");
            creatDiv.innerHTML = detailName[i] + ": " + details[i].detailName[i];
            creatDiv.classList.add("creatDiv");
            creatDiv.appendChild(".detail");
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
        var passwordElement = document.querySelector(".pass");
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
