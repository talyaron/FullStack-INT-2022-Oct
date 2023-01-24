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
var getRndUser = function (n) {
    try {
        var fetchRadomUser = fetch("https://randomuser.me/api/?results=" + n);
        fetchRadomUser.then(function (data) {
            data.json().then(function (randomUser) {
                //   console.log(randomUser.results);
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
                    console.log(userList);
                });
            });
        });
    }
    catch (error) {
        console.log(error);
    }
};
// console.table(userList);
var wrapper = document.querySelector(".cardsWrapper");
function renderUsers(arr) {
    getRndUser(5);
    arr.forEach(function (user) {
        var userCard = document.createElement("div");
        userCard.classList.add("cardsWrapper__userCard");
        userCard.innerHTML = "<img src=\"https://randomuser.me/api/portraits/men/75.jpg\" alt=\"\" />\n    <ul>\n    <li>Gender: <span>Male</span></li>\n    <li>First Name: <span>Vladislav</span></li>\n    <li>Last Name: <span>Bykanov</span></li>\n    <li>\n      Password: <span>************</span\n      ><button id=\"passBtn\">Show</button>\n    </li>\n    <li>User Name: <span>vladbyk89</span></li>\n    <li>Date Of Birth: <span>19-11-1989</span></li>\n    <li>Phone Number: <span>054-8155-232</span></li>\n    <li>Location: <span>The Netherlands</span></li>\n  </ul>\n  ";
        wrapper.appendChild(userCard);
        // const img = new Image();
        // const ulEle = document.createElement("ul") as HTMLUListElement;
        // const li = document.createElement("li") as HTMLLIElement;
        // const span = document.createElement("span") as HTMLSpanElement;
        // li.textContent = user[0];
    });
}
console.log('End of TS');
