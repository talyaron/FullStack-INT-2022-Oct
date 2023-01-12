var japen = {
    name: "japen",
    yearOfIndetedice: 1941,
    continent: "asia"
};
var holand = {
    name: "holand",
    yearOfIndetedice: 1948,
    continent: "asia",
    captial: "jerusalem"
};
function olderstate(state1, state2) {
    try {
        var yearOfIndetedice = state1.yearOfIndetedice;
        var yearOfIndetedice2 = state2.yearOfIndetedice;
        if (yearOfIndetedice < yearOfIndetedice2) {
            return state1.name;
        }
        else {
            return state2.name;
        }
    }
    catch (error) {
        console.error(error);
        return "we have an error";
    }
}
var independice = olderstate(japen, holand);
console.log(independice);
