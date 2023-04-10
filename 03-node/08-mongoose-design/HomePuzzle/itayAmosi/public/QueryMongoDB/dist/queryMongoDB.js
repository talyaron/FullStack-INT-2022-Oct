function addMockCourse() {
    fetch("/api/courses/add-mock-course", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
function addMockStudents() {
    fetch("/api/students/add-mock-students", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
function addMockGrades() {
    fetch("/api/grades/add-mock-grades", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
function addMockTeacher() {
    fetch("/api/teachers/add-mock-teacher", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
