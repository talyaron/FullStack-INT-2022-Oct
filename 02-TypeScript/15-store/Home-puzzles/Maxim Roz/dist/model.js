var UserData = /** @class */ (function () {
    function UserData(name, adress, email, phone, password, color, image) {
        this.name = name;
        this.adress = adress;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.color = color;
        this.image = image;
        this.uid;
    }
    return UserData;
}());
var users = [];
var usersLocalImg = [];
var usersData = [];
console.log(UserData);
