/*
1) create array of Persons. each person has an age. calculate the average age in the array.
2) create an array of 10 devlopers. ask each devloper with prompt, what is her salary, and her perofession (full-stack, devops, qa) (with prompt). then, calculate the average of each perofession */
var Developer = /** @class */ (function () {
    function Developer(name, profession, salary) {
        this.name = name;
        this.profession = profession;
        this.salary = salary;
    }
    return Developer;
}());
var noa = new Developer("Noa");
var amit = new Developer("Amit");
var uriel = new Developer("Uriel");
var tomer = new Developer("Tomer");
var dan = new Developer("Dan");
var ruth = new Developer("Ruth");
var noam = new Developer("Noam");
var shira = new Developer("Shira");
var daniel = new Developer("Daniel");
var gershon = new Developer("Gershon");
var developersArr = [
    noa,
    amit,
    uriel,
    tomer,
    dan,
    ruth,
    noam,
    shira,
    daniel,
    gershon,
];
console.log(developersArr.length);
getProfessionAndSalary(developersArr);
console.log(developersArr);
salaryAverage(developersArr);
function getProfessionAndSalary(developersArr) {
    try {
        var getFromUser = void 0;
        for (var i = 0; i < developersArr.length; i++) {
            while (!getFromUser) {
                getFromUser = prompt(developersArr[i].name + " enter your profession:");
            }
            developersArr[i].profession = getFromUser;
            getFromUser = null;
            while (!getFromUser) {
                getFromUser = prompt(developersArr[i].name + " enter your salary:");
            }
            developersArr[i].salary = parseInt(getFromUser);
            getFromUser = null;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function salaryAverage(developersArr) {
    try {
        var fullstackDevelopers = developersArr.filter(function (developer) { return developer.profession === "fullstack"; });
        var sumFS = fullstackDevelopers.reduce(function (sum, current) { return sum + current.salary; }, 0);
        console.log("the average salary of fullstack developper is " + sumFS / fullstackDevelopers.length);
        var qaDevelopers = developersArr.filter(function (developer) { return developer.profession === "qa"; });
        var sumQA = qaDevelopers.reduce(function (sum, current) { return sum + current.salary; }, 0);
        console.log("the average salary of qa developper is " + sumQA / qaDevelopers.length);
        var devopsDevelopers = developersArr.filter(function (developer) { return developer.profession === "devops"; });
        var sumDevops = devopsDevelopers.reduce(function (sum, current) { return sum + current.salary; }, 0);
        console.log("the average salary of devops developper is " + sumDevops / devopsDevelopers.length);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
