function handleDetails(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var name = ev.target.elements.name;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.value;
        var password = ev.target.elements.password.value;
        var color = ev.target.elements.color.value;
        var img = ev.target.elements.img;
        var id = arrayOfUsers.length === undefined ? 0 : arrayOfUsers.length;
        if (id && name && address && email && phone && password && color && img)
            arrayOfUsers.push(new UserDetails(id, name, address, email, phone, password, color, img));
        console.log(arrayOfUsers);
        renderDetails();
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function renderDetails() {
    try {
        // ev.preventDefault();
        var currentIndexArray = arrayOfUsers.length - 1;
        var card = "<div class=\"userDetailsCard\" id=\"userInput" + arrayOfUsers[currentIndexArray].id + "\">\n        <p>name: " + arrayOfUsers[currentIndexArray].name + "</p><br>\n        <p>address: " + arrayOfUsers[currentIndexArray].address + "</p><br>\n        <p>email: " + arrayOfUsers[currentIndexArray].email + "</p> <br>\n        <p>phone: " + arrayOfUsers[currentIndexArray].phone + "</p><br>\n        <p>password: " + arrayOfUsers[currentIndexArray].password + "</p><br>\n        <p>color: " + arrayOfUsers[currentIndexArray].color + "</p><br>\n        <img src=\"" + arrayOfUsers[currentIndexArray].img + "\"</div>";
        if (containerOfDetails) {
            containerOfDetails.innerHTML = card;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleChangerColor(ev) {
    try {
        console.log(ev);
        var color = ev.target.value;
        document.body.style.backgroundColor = color;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
