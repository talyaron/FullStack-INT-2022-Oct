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
                throw new Error("We can't show the user page");
            localStorage.setItem("user id", user.userId);
            localStorage.setItem("user name", user.userFullName);
            link.click();
        }
    }
    catch (error) {
        console.error("something don't work with the log in function");
    }
}
function btnAdd() {
    try {
        if (!form)
            throw new Error("We don't have any element to add your user");
        form.innerHTML = "\n      <h3>Create a user:</h3>\n      <form class=\"form__sign_in\" onsubmit=\"addUser(event)\">\n      <input type=\"text\" name=\"newUserId\" class=\"input\" placeholder=\"Enter your ID number\" required/>\n      <br />\n      <input type=\"password\" name=\"newUserPassword\" class=\"input\" placeholder=\"Enter your password\" required/>\n      <br />\n      <input type=\"text\" name=\"newUserFullName\" class=\"input\" placeholder=\"Enter your full name           \" required/>\n      <br />\n      <lable>Enter your date of birth:</lable> \n      <br />\n      <input type=\"date\" name=\"newUserBirthday\" class=\"input\" required/>\n      <br />\n      <input type=\"email\" name=\"newUserEmail\" class=\"input\" placeholder=\"Enter your email\" required/>\n      <br />\n      <input type=\"text\" name=\"newUserPhone\" class=\"input\" placeholder=\"Enter your phone number\" required/>\n      <br />\n      <input type=\"submit\" id=\"sign_in_btn\" value=\"Sign In\"/>\n      </form>\n  ";
    }
    catch (error) {
        console.error("The form to add users have a problem");
    }
}
function addUser(event) {
    try {
        event.preventDefault();
        var newUserId = event.target.elements.newUserId.value;
        var newUserPassword = event.target.elements.newUserPassword.value;
        var newUserFullName = event.target.elements.newUserFullName.value;
        var newUserBirthday = event.target.elements.newUserBirthday.value;
        var newUserEmail = event.target.elements.newUserEmail.value;
        var newUserPhone = event.target.elements.newUserPhone.value;
        usersList.push(new User(newUserId, newUserPassword, newUserFullName, newUserBirthday, newUserEmail, newUserPhone));
        if (!form)
            throw new Error("We don't have any element to add your user");
        localStorage.setItem("users", JSON.stringify(usersList));
        if (!link)
            throw new Error("The user page cant be open");
        newUserLogIn(newUserId, newUserFullName);
        form.innerHTML = "\n    <h1> The user has been succesfully created <h1>\n    <button onclick=link.click() id=\"btn_new_user_login\">Log-In</button>";
    }
    catch (error) {
        console.error("We didnt succeed to add the new user");
    }
}
function showClubCards(clubCardsList) {
    try {
        if (!localStorage.getItem("user id"))
            throw new Error("No user is log to the system");
        if (clubCardsList.length == 0)
            throw new Error("There is no club cards registed in the system");
        localStorage.setItem("cards", JSON.stringify(clubCardsList));
        var userClubCards = clubCardsList.filter(function (user) { return user.userId == localStorage.getItem("user id"); });
        if (!clubCards)
            throw new Error("We don't have a culb cards div to show you your cards");
        if (!userClubCards)
            clubCards.innerHTML += "There is no club member in any store... \n " + localStorage.getItem("user name") + ", it's time to go shopping";
        else {
            clubCards.innerHTML = "<h2>Welcome " + localStorage.getItem("user name") + "</h2>";
            for (var i = 0; i < userClubCards.length; i++) {
                clubCards.innerHTML += "<div class=\"club_cards__store\">\n        <h3>Store: " + userClubCards[i].store.storeName + "</h3>\n        <h4>Amount of points: " + getAmountOfPoints(userClubCards[i].store.amountOfPoints, userClubCards[i].amountOfPoints) + "</h4>\n       </div>\n    ";
            }
        }
    }
    catch (error) {
        console.error("error loading club cards for user");
    }
}
/*
<button id="set_points_btn" onclick="handleUpdateCard('${userClubCards}','${userClubCards[i].store.storeName}')">Set Points</button>
        <button id="set_points_btn" onclick="handleDeleteCard('${userClubCards}','${userClubCards[i].store.storeName}')">Delete Card</button>
        
function handleDeleteCard(cardList,storeName) {
  try {
    const index = cardList.findIndex((card) => card.store.storeName === storeName);
    if (index === -1) throw new Error("item not found");
    cardList.splice(index, 1);

    if (!clubCards) throw new Error("store is available");
    showClubCards(cardList);
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateCard(cardList,storeName) {
  try {
    let newPoints;
    newPoints = prompt("Enter the correct amount of your points for this store:");
    while (!newPoints || isNaN(newPoints)) {
      newPoints = prompt("You need to enter a number:");
      newPoints = parseInt(newPoints);
    }
    const index = cardList.find((card) => card.store.storeName === storeName);
    if (index === -1) throw new Error("item not found");
    if (newPoints) index.amountOfPoints = newPoints;

    if (!clubCards) throw new Error("ItemRoot is undefined");
    showClubCards(cardList);
  } catch (error) {
    console.error(error);
  }
}*/ 
