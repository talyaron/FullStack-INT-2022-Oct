var Student = /** @class */ (function () {
    function Student(name, uid) {
        this.name = name;
        this.uid = uid;
        this.grades = [];
    }
    Student.prototype.getSimpleStudent = function () {
        return { uid: this.uid, name: this.name, grades: this.grades };
    };
    return Student;
}());
var Grade = /** @class */ (function () {
    function Grade(test, value, uid) {
        this.test = test;
        this.value = value;
        this.uid = uid;
    }
    Grade.prototype.getSimpleGrade = function () {
        return { uid: this.uid, test: this.test, grades: this.value };
    };
    return Grade;
}());
