var developers = [
    {
        name: 'Tom',
        salary: 12000
    },
    {
        name: 'Adam',
        salary: 2000
    },
    {
        name: 'Shir',
        salary: 1000
    },
    {
        name: 'Anna',
        salary: 11000
    },
    {
        name: 'Mia',
        salary: 120
    },
    {
        name: 'Sarah',
        salary: 15000
    },
    {
        name: 'Moran',
        salary: 8000
    },
    {
        name: 'Helen',
        salary: 9000
    },
    {
        name: 'Becky',
        salary: 20000
    },
    {
        name: 'Shalom',
        salary: 39000
    }
];
var averageSalary = function (developers) {
    var sum = 0;
    developers.forEach(function (element) {
        sum += element.salary;
    });
    var averageSalary = sum / developers.length;
    console.log("The average salary of a developer is " + averageSalary);
};
var powerNumber = function (num) {
    var power = Math.pow(num, 2);
    console.log(power);
};
var rootNumbers = function (firstNum, secondNum) {
    var firstRoot = Math.sqrt(firstNum);
    var secondRoot = Math.sqrt(secondNum);
    console.log("The square root of the numbers are " + firstRoot + " and " + secondRoot);
};
averageSalary(developers);
powerNumber(5);
rootNumbers(9, 49);
