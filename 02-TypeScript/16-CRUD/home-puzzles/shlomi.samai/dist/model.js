class Person {
    constructor(name, address, email, phone, password, preferedColor, pictureURL) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.preferedColor = preferedColor;
        this.pictureURL = pictureURL;
        this.uid = uid();
    }
}
const people = [];
console.log(people);
