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
    var gender = e.target.elements.gender.value;
    var firstName = e.target.elements.firstName.value;
    var lastName = e.target.elements.lastName.value;
    var password = e.target.elements.password.value;
    var userName = e.target.elements.userName.value;
    var dob = e.target.elements.dob.value;
    var phone = e.target.elements.phone.value;
    var location = e.target.elements.location.value;
    var image = imgSrc;
    var arr = [gender, firstName, lastName, password, userName, dob, phone, location, image];
    if (arr.some(function (ele) { return ele == ''; }))
        return errMsg.style.display = 'flex';
    var newUser = new User(gender, firstName, lastName, password, userName, dob, phone, location, image);
    userList.unshift(newUser);
    renderUsers(userList);
    preview.src = "";
}
