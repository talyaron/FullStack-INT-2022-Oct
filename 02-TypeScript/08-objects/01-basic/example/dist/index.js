//pre objects
var urielName = "Oriel";
var urielAge = 27;
var urielAddress = "Rishon";
var uriel = { yearOfBirth: 1995, address: "Rishon", name: "Uriel" };
// const object = {"key":"value", "key":"value"}
// key:value  is called "property"
var israel = {
    name: "Israel",
    YearOfIndependice: 1948,
    population: 9000020,
    capitalCity: "Jerusalem",
    armyName: "IDF",
    continent: "Asia"
};
var iossiReels = {
    creator: "Iossi",
    videoId: "dsgdfgdfgdfgdfgdfhbvx_fdhtd",
    timeOfCreation: "25-2-2022"
};
console.log("The state of " + israel.name + " has a population of about " + israel["population"] + ", " + israel.population + ", and its army is called " + israel["army"]);
for (var key in israel) {
    console.log(key); //key
    console.log(israel[key]); //value
}
var messi = {
    name: "Messi",
    address: "Israel st. 525",
    yearOfBirth: 1987,
    nickanme: "The goat",
    citizenship: "Argntina",
    currentAddress: "Paris"
};
var itay = {
    name: "Itay",
    yearOfBirth: 1993,
    address: "Jerusalem"
};
for (var key in messi) {
    console.log(messi.name + " " + key + " is " + messi[key]);
}
function getAgeOfPerson(obj, obj2) {
    try {
        var currentYear = new Date().getFullYear();
        var age_1 = currentYear - obj.yearOfBirth;
        return age_1;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function getCitizenship(person) {
    try {
        if (person.citizenship) {
            return person.citizenship;
        }
        else {
            return "Unknowun";
        }
    }
    catch (error) {
        console.error(error);
        return "Unknowun";
    }
}
var age = getAgeOfPerson(itay);
console.log("The age is " + age);
var citizenship = getCitizenship(uriel);
console.log(citizenship);
