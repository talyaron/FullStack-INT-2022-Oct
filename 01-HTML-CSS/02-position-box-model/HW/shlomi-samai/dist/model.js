class Post {
    constructor(name, BigPictureURL, smallPictureURL) {
        this.name = name;
        this.BigPictureURL = BigPictureURL;
        this.smallPictureURL = smallPictureURL;
        this.uid = uid();
    }
}
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
const posts = [];
console.log(people);
