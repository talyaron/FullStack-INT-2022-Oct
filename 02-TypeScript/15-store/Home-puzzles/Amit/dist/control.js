function renderContacts() {
    var _a, _b;
    try {
        var contactData = document.querySelector("#contactData");
        if (contactData) {
            for (var i = allContactsArray.length - 1; i < allContactsArray.length; i++) {
                var contact = document.createElement("div");
                contact.innerHTML = "\n          <div class=\"results__contact\">\n              <div class=\"results__contact__wrapper\">\n                <span>Name: " + allContactsArray[i].firstName + " </span>\n                <span>Ser Name: " + allContactsArray[i].serName + " </span>\n                <span>Mobile: " + allContactsArray[i].mobileNumber + " </span>\n                <span>E-mail: " + allContactsArray[i].email + " </span>\n              </div>\n              <div id=\"contactImage-" + allContactsArray[i].mobileNumber + "\" class=\"image\"></div> \n          </div>";
                (_a = document.querySelector("#contactData")) === null || _a === void 0 ? void 0 : _a.appendChild(contact);
                // document.getElementById("customimage").onchange = function(e: Event) {
                //     let file = (<HTMLInputElement>e.target).files[0];
                var contactImage = document.querySelector("#contactImage-" + allContactsArray[i].mobileNumber);
                if (contactImage)
                    contactImage.style.backgroundImage = "url(" + URL.createObjectURL((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.files[i]) + ")";
                // if (contactImage) contactImage.style.backgroundColor = "red";
            }
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function search() {
    try {
        var userInput = document.querySelector("#userInput");
        var noResults_1 = document.querySelector("#noResults");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var userInputValue = search.target.value;
            userInputValue = userInputValue.toLocaleLowerCase();
            var results = document.querySelectorAll(".results__contact");
            for (var i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    results[i].style.display = "";
                    noResults_1.style.display = "none";
                }
                else {
                    results[i].style.display = "none";
                }
            }
            var allContacts = document.querySelectorAll(".results");
            for (var i = 0; i < results.length; i++) {
                if (!allContacts[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    noResults_1.style.display = "";
                    noResults_1.innerHTML = "Sorry, there isn't a contact that icludes <u><b>" + userInputValue + "</b></u> on our store...";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function handleAddContact(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.elements.firstName.value;
        var serName = ev.target.elements.serName.value;
        var mobileNumber = ev.target.elements.mobileNumber.value;
        var email = ev.target.elements.email.value;
        allContactsArray.push(new Contact(firstName, serName, mobileNumber, email));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
