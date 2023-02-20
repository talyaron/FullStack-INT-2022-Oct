var Israel = {
    name: "israel",
    yearOfDecleration: 1948
};
var India = {
    name: "India",
    yearOfDecleration: 1948
};
function declerationSeniority(obj1, obj2) {
    try {
        if (obj1.yearOfDecleration > obj2.yearOfDecleration) {
            return obj2.name;
        }
        else if (obj2.yearOfDecleration > obj1.yearOfDecleration) {
            return obj1.name;
        }
        else {
            return ("both seniority are the same");
        }
    }
    catch (error) {
        console.error(error);
        return "we have some error";
    }
}
console.log(declerationSeniority(India, Israel));
