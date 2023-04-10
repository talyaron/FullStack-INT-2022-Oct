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
        console.log("newStudent", newStudent);

        fetch("/api/students/add-student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
        console.log("studentName", studentName);

        studentName.contentEditable = "true";
        studentName.style.color = "blue";

    } catch (error) {
        console.error(error);
    }
}

function handleSaveStudentNameUpdate(_id: string){
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
            body: JSON.stringify({ _id , updatedName}),
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


function handleAddCourse(ev: any, studentId: string) {
    try {
        console.log("studentId", studentId);

        ev.preventDefault();

        const course = ev.target.elements.course.value;
        if (!studentId) throw new Error("No studentId in form");
        if (!course) throw new Error("No course in form");

        const data: any = { course, studentId };

        console.log("data", data);

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
                console.log(students);
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