var people = /** @class */ (function () {
    function people(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return people;
}());
var luna = new people('luna', 21, 'female');
var mike = new people('mike', 30, 'male');
var bob = new people('bob', 14, 'male');
var arr = [luna, mike, bob];
arr.sort(function (a, b) { return a.age - b.age; });
console.log(arr);
// filter op1
var gender = arr.filter(function (people) { return people.gender === "male"; });
console.log(gender);
// filter op2 -- without a variable--
console.log(arr.filter(function (people) { return people.gender === "female"; }));
