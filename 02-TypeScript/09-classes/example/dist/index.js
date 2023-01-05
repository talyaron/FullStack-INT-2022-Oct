var Person = /** @class */ (function () {
    //constructor
    function Person(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    Person.prototype.sayHello = function () {
        return "Hi, my name is " + this.name + " and my age is " + this.age();
    };
    return Person;
}());
var uriel = new Person("uriel", 1995);
var noa = new Person("Noa", 2001);
var ayala = new Person("Ayala", 2000);
function createUser() {
    try {
        var name = null;
        var yearOfBirth = null;
        while (!name) {
            name = prompt("What is your name?");
        }
        while (!yearOfBirth) {
            yearOfBirth = prompt("What is your year of birth");
        }
        var user_1 = new Person(name, parseInt(yearOfBirth));
        return user_1;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var user = createUser();
console.log(user);
if (user) {
    document.write(user.sayHello());
}
