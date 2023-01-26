var Titel = /** @class */ (function () {
    // uid: string;
    function Titel(name, city, email, phone, password, color) {
        this.name = name;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.color = color;
        // this.uid = uid();
    }
    return Titel;
}());
var titel = [];
titel.push(new Titel('ayala', 'jerusalem', 'example@example.com', +1234567890, 12345, "rgb(255, 0, 0)"));
console.log(titel);
