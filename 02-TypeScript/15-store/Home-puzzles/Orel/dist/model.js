"use strict";
class User {
    constructor(fullName, address, email, phone, password) {
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.uID = uid();
    }
}
let users = [];
