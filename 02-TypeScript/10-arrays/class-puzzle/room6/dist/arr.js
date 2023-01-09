// level 1
var people = /** @class */ (function () {
    function people(name, age) {
        this.name = name;
        this.age = age;
    }
    return people;
}());
var ayala = new people('ayala', 37);
var shlomi = new people('shlomi', 35);
var angela = new people('angela', 21);
var tal = new people('tal', 52);
var moshe = new people('moshe', 78);
var avrg = [ayala, shlomi, angela, tal, moshe];
var averageAge = avrg.reduce(function (a, b) { return a + b.age; }, 0) / avrg.length;
console.log("the average age is  " + averageAge);
// level 2
var Devlopers = /** @class */ (function () {
    function Devlopers(salary, jobTitle) {
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
    return Devlopers;
}());
var per1 = new Devlopers(10000, "qa");
var per2 = new Devlopers(17000, "senior devloper");
var per3 = new Devlopers(9700, "IT");
var allDevlopers = [per1, per2, per3];
function input() {
    try {
        var i = 0;
        while (i <= 10) {
            var userJob = prompt("what is your job title?");
            var userSalary = prompt("what is your salary?");
            var pushInput = allDevlopers[i].salary;
            i++;
        }
        return;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
console.log(input());
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
