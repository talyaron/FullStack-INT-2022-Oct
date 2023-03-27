var User = /** @class */ (function () {
    function User(name, adress, email, phone, password, color, img) {
        this.name = name;
        this.adress = adress;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.color = color;
        this.img = img;
        this.uID = uID();
    }
    return User;
}());
var users = [];
console.log(users);
