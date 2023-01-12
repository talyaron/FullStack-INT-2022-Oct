var Israel = {
    name: "Israel",
    capitalCity: "jerusalem",
    population: 90000000,
    YearOfIndependice: 1948,
    coinNane: "shekel",
    launguage: "hebrow"
};
var Indya = {
    name: "Indya",
    capitalCity: "NewDelhi",
    population: 20000000000,
    YearOfIndependice: 1900
};
function getTheOldestState(Israel, Indya) {
    try {
        if (Israel.YearOfIndependice > Indya.YearOfIndependice) {
            return Indya.name;
        }
        else if (Israel.YearOfIndependice < Indya.YearOfIndependice) {
            return Israel.name;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log("The bigest Stat is " + getTheOldestState(Israel, Indya));
