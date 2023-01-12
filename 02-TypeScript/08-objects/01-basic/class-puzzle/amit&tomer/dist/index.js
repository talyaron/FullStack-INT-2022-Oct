var Israel = {
    YearOfIndependence: 1948,
    continent: "asia",
    name: "israel"
};
var Narniya = {
    YearOfIndependence: 1950,
    continent: "wardrobe",
    name: "Narniya"
};
var usa = {
    YearOfIndependence: 1776,
    continent: "amrica",
    name: "USA"
};
function Older(obj, obj2) {
    try {
        if (obj.YearOfIndependence < obj2.YearOfIndependence) {
            return obj.name;
        }
        else if (obj.YearOfIndependence > obj2.YearOfIndependence) {
            return obj2.name;
        }
        else {
            return "even";
        }
    }
    catch (error) {
        console.error("wrong waedrobe");
    }
}
var YearOfIndependence = Older(Israel, usa);
console.log(YearOfIndependence);
