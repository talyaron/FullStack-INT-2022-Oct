var Person = /** @class */ (function () {
    function Person(name, address, email, phone, password, preferedColor, pictureURL) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.preferedColor = preferedColor;
        this.pictureURL = pictureURL;
        this.uid = uid();
    }
    return Person;
}());
var people = [];
console.log(people);
