var Teacher = /** @class */ (function () {
    function Teacher(name, password, subject, uid) {
        this.name = name;
        this.password = password;
        this.subject = subject;
        this.uid = uid;
    }
    return Teacher;
}());
var Student = /** @class */ (function () {
    function Student(name, password, grades, uid) {
        this.name = name;
        this.password = password;
        this.grades = grades;
        this.uid = uid;
    }
    return Student;
}());
var Subject = /** @class */ (function () {
    function Subject(name, uid) {
        this.name = name;
        this.uid = uid;
    }
    return Subject;
}());
var Grade = /** @class */ (function () {
    function Grade(subject, student, task, grade, uid) {
        this.subject = subject;
        this.student = student;
        this.task = task;
        this.grade = grade;
        this.uid = uid;
    }
    Grade.prototype.getSimpleGrade = function () {
        return { uid: this.uid, subject: this.subject, grade: this.grade, student: this.student };
    };
    return Grade;
}());
var subjects = [
    new Subject("Math"),
    new Subject("Biology"),
    new Subject("English")
];
var teachers = [
    new Teacher("Yariv Edri", "yariv", subjects[0]),
    new Teacher("Ruti Gabay", "ruti", subjects[1]),
    new Teacher("Ofra Zror", "ofra", subjects[2])
];
var students = [
    new Student("Noa Meillet", "noa"),
    new Student("Sagiv Kelly", "sagiv"),
    new Student("Amit Vaknin", "amit")
];
var grades = [
    new Grade(subjects[0], students[0], "homework", 94),
    new Grade(subjects[0], students[1], "homework", 93),
    new Grade(subjects[0], students[2], "finals"),
    new Grade(subjects[1], students[0]),
    new Grade(subjects[1], students[1], "project"),
    new Grade(subjects[1], students[2], "project", 83),
    new Grade(subjects[2], students[0]),
    new Grade(subjects[2], students[1], "project"),
    new Grade(subjects[2], students[2], "homework", 89)
];
function getGradesBySubject(subjectToGet) {
    return grades.filter(function (subject) { return subject.subject == subjectToGet; });
}
