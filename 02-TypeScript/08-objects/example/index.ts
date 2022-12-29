//pre objects

const urielName = "Oriel";
const urielAge = 27;
const urielAddress = "Rishon";

interface State {
  name: string;
  YearOfIndependice: number;
  population: number;
  capitalCity: string;
  armyName: string;
  continent: string;
}

interface Person {
  name: string;
  yearOfBirth: number;
  address: string;
  nickanme?: string;
  citizenship?: string;
  currentAddress?: string;
}

const uriel: Person = { yearOfBirth: 1995, address: "Rishon", name: "Uriel" };
// const object = {"key":"value", "key":"value"}
// key:value  is called "property"

const israel: State = {
  name: "Israel",
  YearOfIndependice: 1948,
  population: 9000020,
  capitalCity: "Jerusalem",
  armyName: "IDF",
  continent: "Asia",
};

const iossiReels = {
  creator: "Iossi",
  videoId: "dsgdfgdfgdfgdfgdfhbvx_fdhtd",
  timeOfCreation: "25-2-2022",
};

console.log(
  `The state of ${israel.name} has a population of about ${israel["population"]}, ${israel.population}, and its army is called ${israel["army"]}`
);

for (const key in israel) {
  console.log(key); //key
  console.log(israel[key]); //value
}

const messi: Person = {
  name: "Messi",
  address: "Israel st. 525",
  yearOfBirth: 1987,
  nickanme: "The goat",
  citizenship: "Argntina",
  currentAddress: "Paris",
};

const itay: Person = {
  name: "Itay",
  yearOfBirth: 1993,
  address: "Jerusalem",
};

for (const key in messi) {
  console.log(`${messi.name} ${key} is ${messi[key]}`);
}

function getAgeOfPerson(obj: Person): number | false {
  try {
    const currentYear: number = new Date().getFullYear();
    const age = currentYear - obj.yearOfBirth;
    return age;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getCitizenship(person: Person): string {
  try {
    if (person.citizenship) {
      return person.citizenship;
    } else {
      return "Unknowun";
    }
  } catch (error) {
    console.error(error);
    return "Unknowun";
  }
}

const age = getAgeOfPerson(itay);
console.log(`The age is ${age}`);

const citizenship = getCitizenship(uriel);
console.log(citizenship);
