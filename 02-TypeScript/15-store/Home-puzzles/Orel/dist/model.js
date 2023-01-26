var User = /** @class */ (function () {
    function User(fullName, address, email, phone, password) {
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.uID = uid();
    }
    return User;
}());
var users = [];
