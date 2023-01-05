interface Person {
  name: string;
  yearOfBith: number;
  address?:string;
  age: Function;
  sayHello: Function;
  setGender:Function;
}

const yoval:Person = {
  name: "Yuval P",
  yearOfBith: 2000,
  age: function () {
    return new Date().getFullYear() - this.yearOfBith;
  },
  sayHello: function () {
    return `Hello, my name is ${this.name}`;
  },

  setGender:function(gender){
    this.gender = gender;
  }
};

yoval.name = "Yuval Partosh";

yoval.address = 'Rechovot';

yoval.setGender('male');

console.dir(yoval)
console.log(yoval.age());
console.log(yoval.sayHello());
console.log(yoval.address)
