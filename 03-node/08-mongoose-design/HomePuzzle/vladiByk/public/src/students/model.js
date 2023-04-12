"use strict";
class Student {
    constructor(name, id = "") {
        this.name = name;
        this.id = id;
    }
    addGrade(btn, newGradeInput) {
        btn.addEventListener("click", () => {
            updateGrade(newGradeInput, this.id);
        });
        newGradeInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                updateGrade(newGradeInput, this.id);
            }
        });
    }
}
