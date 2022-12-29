//pre objects

const urielName = "Oriel";
const urielAge = 27;
const urielAddress = "Rishon";

const uriel = { age: 27, address: "Rishon", name: "Uriel" };
// const object = {"key":"value", "key":"value"}
// key:value  is called "property"

const messi = {
  age: 35,
  nickanme: "The goat",
  citizenship: "Argntina",
  currentAddress: "Paris",
};

const israel = {
  name: "Israel",
  age: 74,
  population: 9000020,
  capitalCity: "Jerusalem",
  army: "IDF",
  continent: "Asia",
};

console.log(
  `The state of ${israel.name} has a population of about ${israel["population"]}, ${israel.population}, and its army is called ${israel["army"]}`
);
