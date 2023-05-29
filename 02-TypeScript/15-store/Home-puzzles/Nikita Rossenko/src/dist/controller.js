function newRegister(e) {
    try {
        e.preventDefault();
        var name = e.target.elements.name.value;
        var address = e.target.elements.address.value;
        var email = e.target.elements.email.value;
        var phone = e.target.elements.phone.value;
        var password = e.target.elements.password.value;
        var color = e.target.elements.color.value;
        var image = e.target.elements.image.value;
        var id = usersInputArray.length;
        var newUserInput = new userInput(id, name, address, email, phone, password, color, image);
        usersInputArray.push(newUserInput);
        console.log(usersInputArray);
        renderUserInputs(usersInputArray[usersInputArray.length - 1]);
    }
    catch (error) {
        console.error(error);
    }
}
function renderUserInputs(addUserInput) {
    try {
        if (userInputContainer) {
            userInputContainer.insertAdjacentHTML("beforeend", "<div class=\"usersInputCard\" id=\"userInput" + addUserInput.id + "\">");
            var userInputIndex = document.querySelector("#userInput" + addUserInput.id);
            if (userInputIndex) {
                userInputIndex.insertAdjacentHTML("beforeend", "<p>name: " + addUserInput.name + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<p>address: " + addUserInput.address + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<p>email: " + addUserInput.email + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<p>phone: " + addUserInput.phone + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<p>password: " + addUserInput.password + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<p>color: " + addUserInput.color + "</p>");
                userInputIndex.insertAdjacentHTML("beforeend", "<img src=\"" + addUserInput.image + "\">");
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
