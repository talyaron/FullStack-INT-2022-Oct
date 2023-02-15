function renderUsers(arr) {
    wrapper.replaceChildren();
    arr.forEach(function (user) {
        var userCard = document.createElement("div");
        userCard.classList.add("cardsWrapper__userCard");
        userCard.innerHTML = "<img class=\"userImg\" src=\"" + user.getProfileImg() + "\"/>\n      <ul>\n      <li>Gender: " + user.getGender() + "</li>\n      <li>First Name: " + user.getFirstName() + "</li>\n      <li>Last Name: " + user.getLastName() + "</li>\n      <li>Password: " + user.getPassword() + "</li>\n      <li>UserName: " + user.getUserName() + "</li>\n      <li>Date Of Birth: " + user.getDOB() + "</li>\n      <li>Phone Number: " + user.getPhoneNum() + "</li>\n      <li>Location: " + user.getLocation() + "</li>\n      </ul>";
        wrapper.appendChild(userCard);
    });
}
function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    var gender = this.elements.gender.value;
    var firstName = this.elements.firstName.value;
    var lastName = this.elements.lastName.value;
    var password = this.elements.password.value;
    var userName = this.elements.userName.value;
    var dob = this.elements.dob.value;
    var phone = this.elements.phone.value;
    var location = this.elements.location.value;
    var image = imgSrc;
    var arr = [gender, firstName, lastName, password, userName, dob, phone, location, image];
    if (arr.some(function (ele) { return ele == ''; }))
        return errMsg.style.display = 'flex';
    var newUser = new User(gender, firstName, lastName, password, userName, dob, phone, location, image);
    userList.unshift(newUser);
    // adding new user to the screen
    renderUsers(userList);
    // reinitializing img click
    setImgClick();
    //clearing form
    preview.src = "";
    e.target.reset();
}
