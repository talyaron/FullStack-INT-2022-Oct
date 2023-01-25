var user = /** @class */ (function () {
    function user(name, address, email, phone, password, favoriteColor) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.favoriteColor = favoriteColor;
    }
    return user;
}());
var userinfo = [];
userinfo.push(new user("tomer", "mivtza kilshon 12", "tomer6633@gmail.com", 506668817, "tomer1", "blue"));
console.log(userinfo);
