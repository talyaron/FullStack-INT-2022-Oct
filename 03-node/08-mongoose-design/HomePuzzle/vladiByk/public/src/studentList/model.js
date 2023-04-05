"use strict";
class Student {
    constructor(name, grades = [], _id = "") {
        this.name = name;
        this.grades = grades;
        this._id = _id;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverage() {
        const average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        return average.toFixed(2);
    }
}
