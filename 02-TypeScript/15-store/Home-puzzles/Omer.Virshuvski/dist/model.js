var User = /** @class */ (function () {
    function User(name, address, email, phone, color, password) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.color = color;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getColor = function () {
        return this.color;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
var users = [];
