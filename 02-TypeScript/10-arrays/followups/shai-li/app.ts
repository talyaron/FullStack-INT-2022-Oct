"use strict";

class Person {
  constructor(private name: string) {}
}

const maya = new Person("Maya");
const ruth = new Person("Ruth");
const dan = new Person("Dan");
const rona = new Person("Rona");
const david = new Person("23")

const persons: Person[] = [maya, ruth, dan, rona, david];
console.log(persons);
console.log(persons[4]);
