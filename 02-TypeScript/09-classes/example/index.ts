class Person {
  name: string;
  yearOfBirth: number;

  //constructor
  constructor(name: string, yearOfBirth: number) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  age() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and my age is ${this.age()}`;
  }
}

const uriel = new Person("uriel", 1995);
const noa = new Person("Noa", 2001);
const ayala = new Person("Ayala", 2000);

function createUser(): Person | false {
  try {
    let name: string | null = null;
    let yearOfBirth: string | null = null;

    while (!name) {
      name = prompt("What is your name?");
    }

    while (!yearOfBirth) {
      yearOfBirth = prompt("What is your year of birth");
    }

    const user = new Person(name, parseInt(yearOfBirth));

    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const user = createUser();
console.log(user);
if (user) {
  document.write(user.sayHello());
}
