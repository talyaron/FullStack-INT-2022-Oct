///////////////////////students/////////////////////

function handleGetStudents() {
    try {
        fetch("/api/students/get-students")
            .then((res) => res.json())
            .then(({ students }) => {
                try {
                    if (!students) throw new Error("didn't find students");

                    renderStudents(students);
                } catch (error) {
                    console.error(error);
                }
            });
    } catch (error) {
        console.error(error);
    }
}

function handleAddStudent(ev) {
    try {

        ev.preventDefault();
        const name = ev.target.elements.name.value;
        if (!name) throw new Error("No name on form");

        const newStudent: any = { name };

        fetch("/api/students/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });

        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}


function handleDeleteStudent(_id: string) {
    try {

        fetch("/api/students/delete-student", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}


function handleStudentNameUpdate(_id: string) {
    try {
        const studentName: HTMLDivElement | null = document.querySelector(`#studentName-${_id}`);
        if (!studentName) throw new Error("student name not found on DOM");

        studentName.contentEditable = "true";
        studentName.style.color = "yellow";

    } catch (error) {
        console.error(error);
    }
}

function handleSaveStudentNameUpdate(_id: string) {
    try {
        const studentName: HTMLDivElement | null = document.querySelector(`#studentName-${_id}`);
        if (!studentName) throw new Error("student name not found on DOM");

        studentName.contentEditable = "false";
        studentName.style.color = "black";

        const updatedName = studentName.innerText;


        fetch("/api/students/update-student-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id, updatedName }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}


///////////////////////courses/////////////////////

function handleAddCourse(ev: any, studentId: string) {
    try {
        ev.preventDefault();

        const course = ev.target.elements.course.value;
        if (!studentId) throw new Error("No studentId in form");
        if (!course) throw new Error("No course in form");

        const data: any = { course, studentId };

        fetch(`/api/courses/add-course`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students)
            })
            .catch((error) => {
                console.error(error);
            });

        ev.target.reset();

    } catch (error) {
        console.error(error);
    }
}


function handleDeleteCourse(courseId: string, studentId: string) {
    try {
        fetch("/api/courses/delete-course", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId, studentId }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}


function handleCourseUpdate(_id: string) {
    try {
        const course: HTMLDivElement | null = document.querySelector(`#course-${_id}`);
        if (!course) throw new Error("course name not found on DOM");

        course.contentEditable = "true";
        course.style.color = "yellow";

    } catch (error) {
        console.error(error);
    }
}

function handleSaveCourseUpdate(courseId: string, studentId: string) {
    try {
        const course: HTMLDivElement | null = document.querySelector(`#course-${courseId}`);
        if (!course) throw new Error("course not found on DOM");

        course.contentEditable = "false";
        course.style.color = "black";

        const updatedCourse = course.innerText;

        fetch("/api/courses/update-course", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId, studentId, updatedCourse }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}

///////////////////////grades/////////////////////


function handleAddGrade(courseId: string, studentId: string){
    try {
        const data: any = { courseId, studentId };

        fetch(`/api/grades/add-grade`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(({ students }) => {
                console.log("students on handleAddGrade", students);
                renderStudents(students)
            })
            .catch((error) => {
                console.error(error);
            });        
    } catch (error) {
        console.error(error);
    }
}


function handleDeleteGrade(courseId: string, studentId: string, gradeId: string) {
    try {
        console.log("studentId", studentId);
        
        fetch("/api/grades/delete-grade", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId, studentId, gradeId }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}

function handleGradeUpdate(_id: string) {
    try {
        const grade: HTMLDivElement | null = document.querySelector(`#grade-${_id}`);
        if (!grade) throw new Error("grade not found on DOM");

        grade.contentEditable = "true";
        grade.style.color = "yellow";

    } catch (error) {
        console.error(error);
    }
}


function handleSaveGradeUpdate(courseId: string, studentId: string, gradeId: string){
    try {
        console.log("gradeId", gradeId);
        
        const grade: HTMLDivElement | null = document.querySelector(`#grade-${gradeId}`);
        if (!grade) throw new Error("grade not found on DOM");

        grade.contentEditable = "false";
        grade.style.color = "black";

        const updatedGrade = grade.innerText;

        fetch("/api/grades/update-grade", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId, studentId, gradeId ,updatedGrade }),
        })
            .then((res) => res.json())
            .then(({ students }) => {
                renderStudents(students);
            })
            .catch((error) => {
                console.error(error);
            });
        
    } catch (error) {
        console.error(error);
    }
}

///////////////////////query/////////////////////

function handleGradesInSpecificCourseQuery(ev){
    try {
        ev.preventDefault();
        const courseName: string | null  = ev.target.elements.course.value;
        if (!courseName) throw new Error("No course on form");

        fetch(`/api/courses/get-student-grades-in-course?name=${courseName}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({gradesInCourse}) => {
                console.log(`grades in ${courseName}:`, gradesInCourse)
                // renderStudentGradesInCourse(grades);
            })
            .catch((error) => {
                console.error(error);
            });

        ev.target.reset();
    } catch (error) {
        console.error(error); 
    }
}

