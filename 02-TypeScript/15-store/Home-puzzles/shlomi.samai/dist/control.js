function handleAddItem(ev) {
    try {
        ev.preventDefault();
        debugger;
        var name = ev.target.elements.name.value;
        var address = ev.target.elements.address.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.valueAsNumber;
        var password = ev.target.elements.password.value;
        var preferedColor = ev.target.elements.preferedColor.value;
        var pictureURL = ev.target.elements.pictureURL.value;
        people.push(new Person(name, address, email, phone, password, preferedColor, pictureURL));
        ev.target.reset();
        render();
    }
    catch (error) {
        console.error(error);
    }
}
function render() {
    var page = "";
    var j = 0;
    for (j = 0; j <= people.length - 1; j++) {
        page += "<div class=\"list\"> \n            <h3>" + people[j].name + "</h3>\n            <h3>" + people[j].address + "</h3>\n            <h3>" + people[j].email + "</h3>\n            <h3>" + people[j].phone + "</h3>\n            <h3>" + people[j].password + "</h3>\n            <h3>" + people[j].preferedColor + "</h3>\n            <img src='" + people[j].pictureURL + "'/> \n            </div>";
    }
    console.log(page);
    var html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
