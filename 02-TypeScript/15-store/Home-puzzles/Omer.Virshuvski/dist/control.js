form1.addEventListener('submit', function (ev) {
    ev.preventDefault();
    console.log(ev);
    try {
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var phone = ev.target.elements.phone.value;
        var email = ev.target.elements.email.value;
        var color = ev.target.elements.color.value;
        var password = ev.target.elements.password.value;
        users.push(new User(name, address, email, phone, color, password));
        ev.target.reset();
        console.log(users);
        var div = document.createElement("div");
        div.className = "allUsers__user";
        var h2 = document.createElement("h2");
        h2.innerText = "Name: " + name;
        var addressP = document.createElement("p");
        addressP.innerText = "Address: " + address;
        var emailP = document.createElement("p");
        emailP.innerText = "Email: " + email;
        var phoneP = document.createElement("p");
        phoneP.innerText = "Phone: " + phone;
        var colorP = document.createElement("p");
        colorP.innerText = "Color: " + color;
        div.appendChild(h2);
        div.appendChild(addressP);
        div.appendChild(emailP);
        div.appendChild(phoneP);
        div.appendChild(colorP);
        allUsers.appendChild(div);
    }
    catch (error) {
        console.error(Error);
    }
});
show.addEventListener('click', function () {
    allUsers.style.display = "block";
});
