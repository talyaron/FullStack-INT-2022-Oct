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
