var user = /** @class */ (function () {
    function user(name, address, email, phone, password, favoriteColor) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.favoriteColor = favoriteColor;
        this.uid = uid();
    }
    return user;
}());
var userinfo = [];
console.log(userinfo);
