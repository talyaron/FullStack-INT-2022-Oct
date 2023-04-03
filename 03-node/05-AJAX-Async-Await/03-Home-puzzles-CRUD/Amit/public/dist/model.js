var Student = /** @class */ (function () {
    function Student(name, _id) {
        this.name = name;
        this._id = _id;
        this.grades = [];
    }
    Student.prototype.getSimpleStudent = function () {
        return { _id: this._id, name: this.name, grades: this.grades };
    };
    return Student;
}());
var Grade = /** @class */ (function () {
    function Grade(test, value, _id) {
        this.test = test;
        this.value = value;
        this._id = _id;
    }
    Grade.prototype.getSimpleGrade = function () {
        return { _id: this._id, test: this.test, grades: this.value };
    };
    return Grade;
}());
