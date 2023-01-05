var india = {
    country: "india",
    yearOfIndependentcy: 1947
};
var israel = {
    country: "israel",
    yearOfIndependentcy: 1948
};
function early(obj1, obj2) {
    if (obj1.yearOfIndependentcy > obj2.yearOfIndependentcy) {
        return obj2.country;
    }
    else if (obj1.yearOfIndependentcy < obj2.yearOfIndependentcy) {
        return obj1.country;
    }
    else {
        return "The independancy year is the same";
    }
}
console.log(early(india, israel));
