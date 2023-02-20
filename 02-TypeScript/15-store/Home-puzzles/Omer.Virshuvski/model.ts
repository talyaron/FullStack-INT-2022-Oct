class User {
    constructor(private name:string, private address:string, private email:string, private phone:number, private color:string, private password:string) {

        
    }



    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }
    getColor() {
        return this.color;
    }
    getPassword() {
        return this.password;
    }
}

let users:User[] = [];