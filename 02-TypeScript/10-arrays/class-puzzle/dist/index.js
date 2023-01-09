var Devlopers = /** @class */ (function () {
    function Devlopers(salary, perofession) {
        this.salary = salary;
        this.perofession = perofession;
    }
    return Devlopers;
}());
var avg = 0;
for (var i = 0; i < 2; i++) {
    var salary = prompt("enster ur salary:");
    var perofession = prompt("what profession are you? ");
    console.log(perofession, "--", salary);
    if (salary && perofession) {
        var devloper = new Devlopers(parseInt(salary), perofession);
        console.log(devloper);
    }
    var salarys = [];
    if (salary) {
        salarys[i] = parseInt(salary);
    }
    var perofessions = [];
    if (perofession) {
        perofessions[i] == perofession;
    }
    avg += salarys[i];
    avg = avg / salarys.length;
    //   const average = salarys.reduce((a, b) => a + b, 0) / salarys.length
    //   console.log(`average`,average)
}
console.log(avg);
