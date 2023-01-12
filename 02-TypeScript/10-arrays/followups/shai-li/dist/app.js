"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var maya = new Person("Maya");
var ruth = new Person("Ruth");
var dan = new Person("Dan");
var rona = new Person("Rona");
var david = new Person("23");
var persons = [maya, ruth, dan, rona, david];
console.log(persons);
console.log(persons[4]);
