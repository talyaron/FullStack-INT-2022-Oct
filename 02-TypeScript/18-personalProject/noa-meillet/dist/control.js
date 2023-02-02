var userLogin;
function goToUserProfile(event) {
    try {
        event.preventDefault();
        var userId_1 = event.target.elements.userId.value;
        var password = event.target.elements.userPassword.value;
        if (!usersList)
            throw new Error("We don't have any users that have an account to our site");
        var user = usersList.find(function (user) { return user.userId == userId_1; });
        if (!user) {
            alert("We can't find an account that match to your ID number... You can create an account :)");
        }
        else if (password != user.userPassword) {
            alert(user.userFullName + " the password don't match to your ID number... Try again");
        }
        else {
            if (!link)
                throw new Error("We don't have any element to add your user");
            userLogin = user;
            link.click();
        }
    }
    catch (error) {
        console.error("something don't work with the log in function");
    }
}
function btnAdd() {
    try {
        if (!addUserDiv)
            throw new Error("We don't have any element to add your user");
        addUserDiv.innerHTML = "\n      <input type=\"text\" name=\"newUserId\" class=\"input\" placeholder=\"Enter your ID number\" required/>\n      <br />\n      <input type=\"password\" name=\"newUserPassword\" class=\"input\" placeholder=\"Enter your password\" required/>\n      <br />\n      <input type=\"text\" name=\"newUserFullName\" class=\"input\" placeholder=\"Enter your full name           \" required/>\n      <br />\n      <lable>Enter your date of birth:</lable> \n      <br />\n      <input type=\"date\" name=\"newUserDateOfBirth\" class=\"input\" required/>\n      <br />\n      <input type=\"email\" name=\"newUserEmail\" class=\"input\" placeholder=\"Enter your email\" required/>\n      <br />\n      <input type=\"text\" name=\"newUserphone\" class=\"input\" placeholder=\"Enter your phone number\" required/>\n      <br />\n      <input type=\"submit\" value=\"Sign in\" />\n  ";
    }
    catch (error) {
        console.error("The form to add users hav a problem");
    }
}
function addUser(event) {
    try {
        event.preventDefault();
        var newUserId = event.target.elements.newUserId.value;
        var newUserPassword = event.target.elements.newUserPassword.value;
        var newUserFullName = event.target.elements.newUserFullName.value;
        var newUserDateOfBirth = event.target.elements.newUserDateOfBirth.value;
        var newUserEmail = event.target.elements.newUserEmail.value;
        var newUserphone = event.target.elements.newUserphone.value;
        usersList.push(new User(newUserId, newUserPassword, newUserFullName, newUserDateOfBirth, newUserEmail, newUserphone));
    }
    catch (error) {
        console.error("we didnt succeed to add the new user");
    }
}
function showClubCards() {
    try {
        if (!userLogin)
            throw new Error("error loading club cards for user");
        var userClubCards = clubCardsList.filter(function (user) { return user.userId == userLogin.userId; });
        if (!clubCards)
            throw new Error("We don't have a culb cards div to show you your cards");
        userClubCards.forEach(function (userCard) {
            var _a;
            return (clubCards.innerHTML += "\n  <div class\"club_cards_store\">\n    <h3>" + ((_a = userCard.store) === null || _a === void 0 ? void 0 : _a.storeName) + "</h3>\n    <h4>Amount of points " + getAmountOfPoints(userCard.store.amountOfPoints, userCard.amountOfPoints) + "</h4>\n    <h4>Birthday discount: " + getBirthdayDiscount(userCard.store.bdayDscntDuration, userLogin.dateOfBirth) + "\n  </div>\n  ");
        });
    }
    catch (error) {
        console.error("error loading club cards for user");
    }
}
