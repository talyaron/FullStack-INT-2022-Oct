var user = /** @class */ (function () {
    function user(name, address, email, phone, 
    // public password: string,
    favoriteColor) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.favoriteColor = favoriteColor;
    }
    return user;
}());
var userinfo = [];
// userinfo.push(
//   new user(
//     `tomer`,
//     `mivtza kilshon 12`,
//     `tomer6633@gmail.com`,
//     506668817,
//     `tomer1`,
//     `blue`
//   )
// );
console.log(userinfo);
