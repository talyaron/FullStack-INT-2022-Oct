function coursesPage(e) {
    e.preventDefault();
    try {
        const teacherUsername = e.target.elements.teacherUsername.value;
        if (!teacherUsername) throw new Error("No user data");
        fetch("/api/v1/get-courses", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: teacherUsername }),
        })
            .then((res) => res.json())
            .then(({courses,teacherId}) => {
                console.log(courses,teacherId)
                renderTeacherCourses(courses,teacherId,teacherUsername);
            });
        console.log(teacherUsername);
    } catch (error) {
        console.log(error);
    }
}

function renderTeacherCourses(courses: [], teacherId, teacherUsername) {
    const loginPage = document.querySelector(".login-register_container");
    const body = document.querySelector("body");
    if (loginPage && body) {
        loginPage.remove();
        body.insertAdjacentHTML(
            "beforeend",
            `<div class='navBar'><p id='${teacherId}'></p>Welcome ${teacherUsername}</div><div id='courses_container'></div> <button onclick=addNewCourseDetails() id='add_course'>Add Course</button>`
        );
    }
    if (courses.length === 0) {
        const coursesContainer = document.querySelector("#courses_container");
        console.log("Courses array is empty, add new course");
        if (coursesContainer) {
            coursesContainer.insertAdjacentHTML(
                "afterbegin",
                "<h1>There is no courses to display, add new course</h1>"
            );
        }
    } else {
        const coursesContainer = document.querySelector("#courses_container");
        if (coursesContainer) {
            for (let i = 0; i < courses.length; i++) {
                coursesContainer.insertAdjacentHTML("beforeend", `<div class='courseCard'><h1>${courses[i]['name']}</h1><p>Course Students ${courses[i]['students']}</p></div>`);
            }
        }
    }
}

function addNewCourseDetails() {
    const addCourseButton = document.querySelector("#add_course");
    const addCourseDetails = document.querySelector(
        ".addCourseDetails_container"
    );

    if (addCourseButton && !addCourseDetails) {
        addCourseButton.insertAdjacentHTML(
            "afterend",
            '<div class="addCourseDetails_container"><p>Course Name</p><form onsubmit=addNewCourse(event)><input type="text" name="newCourseName" id="newCourseName" placeholder="Math..."><button type="submit">Add</button></form></div>'
        );
    }
}

function addNewCourse(e) {
    e.preventDefault();
    const newCourseName = e.target.elements.newCourseName.value;

    fetch("/api/v1/add-course", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({newCourseName}),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}
