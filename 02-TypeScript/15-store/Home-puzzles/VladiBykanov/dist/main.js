var User = /** @class */ (function () {
    function User(gender, firstName, lastName, password, userName, dateOfBirth, phoneNumber, location, profileImage) {
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.profileImage = profileImage;
    }
    User.prototype.getGender = function () {
        return this.gender;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.getDOB = function () {
        return this.dateOfBirth;
    };
    User.prototype.getPhoneNum = function () {
        return this.phoneNumber;
    };
    User.prototype.getLocation = function () {
        return this.location;
    };
    User.prototype.getProfileImg = function () {
        return this.profileImage;
    };
    return User;
}());
var userList = [];
var fetchRadomUser = function () {
    return fetch("https://randomuser.me/api/?results=8").then(function (data) {
        data.json().then(function (randomUser) {
            randomUser.results.forEach(function (user) {
                // const gender = user.gender;
                // const firstName = user.name.first;
                // const lastName = user.name.last;
                // const password = user.login.password;
                // const userName = user.login.username;
                // const dateOfBirth = user.dob.date.slice(0, 10);
                // const phoneNumber = user.cell;
                // const location = user.location.country;
                // const profileImage = user.picture.large;
                var randomUser = new User(user.gender, user.name.first, user.name.last, user.login.password, user.login.username, user.dob.date.slice(0, 10), user.cell, user.location.country, user.picture.large);
                userList.push(randomUser);
            });
        });
    });
};
fetchRadomUser();
setTimeout(function () {
    renderUsers(userList);
}, 300);
var wrapper = document.querySelector(".cardsWrapper");
function renderUsers(arr) {
    wrapper.replaceChildren();
    arr.forEach(function (user) {
        var userCard = document.createElement("div");
        userCard.classList.add("cardsWrapper__userCard");
        userCard.innerHTML = "<img src=\"" + user.getProfileImg() + "\"/>\n    <ul>\n    <li>Gender: " + user.getGender() + "</li>\n    <li>First Name: " + user.getFirstName() + "</li>\n    <li>Last Name: " + user.getLastName() + "</li>\n    <li>Password: " + user.getPassword() + "</li>\n    <li>UserName: " + user.getUserName() + "</li>\n    <li>Date Of Birth: " + user.getDOB() + "</li>\n    <li>Phone Number: " + user.getPhoneNum() + "</li>\n    <li>Location: " + user.getLocation() + "</li>\n    </ul>";
        wrapper.appendChild(userCard);
    });
}
var form = document.querySelector(".addUserForm");
form.addEventListener("submit", handleSubmit);
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
    var image = "./img/Profile.jpg";
    console.log(image);
    var newUser = new User(gender, firstName, lastName, password, userName, dob, phone, location, image);
    userList.unshift(newUser);
    renderUsers(userList);
}
