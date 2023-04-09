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



function handleAddCourse(ev: any, _id: string) {
    try {
        console.log("student_id", _id);

        ev.preventDefault();

        const course = ev.target.elements.course.value;
        if (!_id) throw new Error("No _id in form");
        if (!course) throw new Error("No course in form");

        const data: any = { course, _id };

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
            .then((students) => {
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