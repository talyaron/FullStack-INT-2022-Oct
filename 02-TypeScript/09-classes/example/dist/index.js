var Person = /** @class */ (function () {
    //constructor
    function Person(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
