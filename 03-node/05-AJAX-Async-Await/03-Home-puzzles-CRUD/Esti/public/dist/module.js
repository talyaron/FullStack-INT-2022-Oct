"use strict";
exports.__esModule = true;
var uuidv4_1 = require("uuidv4");
var Student = /** @class */ (function () {
    function Student(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
        this.uid = uuidv4_1.uuid();
    }
    Student.prototype.setDetails = function (options) {
        var name = options.name, eMail = options.eMail;
        if (name)
            this.name = name;
        if (eMail)
            this.eMail = eMail;
    };
    return Student;
}());
var student = [];
var newStudents = new Student("Liron", "123");
newStudents.setDetails({
    name: "Liron",
    eMail: "1234@gmail.com"
});
student.push(newStudents);
newStudents = new Student("Fani", "123");
newStudents.setDetails({
    name: "Fani",
    eMail: "1234@gmail.com"
});
student.push(newStudents);
newStudents = new Student("Hagi", "123");
newStudents.setDetails({
    name: "Hagi",
    eMail: "1234@gmail.com"
});
student.push(newStudents);
newStudents = new Student("Zohar", "123");
newStudents.setDetails({
    name: "Zohar",
    eMail: "1234@gmail.com"
});
student.push(newStudents);
// export { student }
console.log(student);
