var form = document.querySelector("#theForm");
function handleAddUser(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var adress = ev.target.elements.adress.value;
        var email = ev.target.elements.email.value;
        var phone = ev.target.elements.phone.valueAsNumber;
        var password = ev.target.elements.password.value;
        var preColor = ev.target.elements.preColor.value;
        var image = ev.target.elements.image.files;
        var confirmPassword = ev.target.elements.confirmPassword.value;
        if (confirmPassword == password) {
            users.push(new user(name, adress, email, phone, password, preColor, image));
            console.log(users);
            console.log(name);
            if (userViewer) {
                userViewer.innerHTML += "<div class=\"wrapper__userViewer__userProfile\">\n       <img src=\"" + imgUrl + "\">\n       <div class=\"wrapper__userViewer__userProfile__userText\">\n           <h1>" + name + "</h1>\n           <p>home adress:" + adress + " email adress:" + email + "</p>\n           <p>favorite color hex: " + preColor + "</p>\n         </div>\n       </div>";
            }
            ev.target.reset();
        }
        else {
            alert("passwords do not match");
        }
    }
    catch (error) {
        console.error(error);
    }
}
