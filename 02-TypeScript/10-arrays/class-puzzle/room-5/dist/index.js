var proffession;
(function (proffession) {
    proffession["FULL_STACK"] = "FULL_STACK";
    proffession["BACK_END"] = "Back-End";
    proffession["FRONT_END"] = "FRONT_END";
})(proffession || (proffession = {}));
var developers = [
    {
        name: "Gili",
        age: 24,
        salary: 34000,
        profession: "FULL_STACK"
    },
    {
        name: "Shahar",
        age: 23,
        salary: 40000,
        profession: "FULL_STACK"
    },
    {
        name: "Tal",
        age: 30,
        salary: 44000,
        profession: "FRONT_END"
    },
    {
        name: "Bill",
        age: 80,
        salary: 100000,
        profession: "BACK_END"
    },
    {
        name: "Amit",
        age: 22,
        salary: 20000,
        profession: "FRONT_END"
    },
    {
        name: "Katia",
        age: 35,
        salary: 29000,
        profession: "BACK_END"
    },
    {
        name: "Omer",
        age: 28,
        salary: 36000,
        profession: "FULL_STACK"
    },
    {
        name: "Muhammad",
        age: 25,
        salary: 11000,
        profession: "FULL_STACK"
    },
    {
        name: "Ovad",
        age: 37,
        salary: 39000,
        profession: "BACK_END"
    },
    {
        name: "Alex",
        age: 20,
        salary: 12000,
        profession: "FRONT_END"
    },
];
var avgSalaryPerProffesion = function (developers) {
    var salaryMap = new Map();
    developers.forEach(function (element) {
        if (salaryMap.has(element.profession)) {
            var value = salaryMap.get(element.profession);
            value.amount++;
            value.sum += element.salary;
            value.avg = value.sum / value.amount;
        }
        else {
            salaryMap.set(element.profession, {
                amount: 1,
                sum: element.salary,
                avg: element.salary
            });
        }
    });
    console.log(salaryMap);
};
avgSalaryPerProffesion(developers);
