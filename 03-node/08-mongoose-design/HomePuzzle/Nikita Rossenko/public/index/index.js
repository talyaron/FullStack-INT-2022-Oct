function renderCoursesPage(e) {
    e.preventDefault();
    try {
        var teacherUsername = e.target.elements.teacherUsername.value;
        console.log(teacherUsername);
    }
    catch (error) {
        console.log(error);
    }
}
function renderTeacherCourses(courses) {
    var loginPage = document.querySelector(".login-register_container");
    var body = document.querySelector("body");
    if (loginPage && body) {
        loginPage.remove();
        body.insertAdjacentHTML("beforeend", "<div id='courses_container'></div>");
        body.insertAdjacentHTML("beforeend", "<button onclick=addNewCourseDetails() id='add_course'>Add Course</button>");
    }
    if (courses.length === 0) {
        var coursesContainer = document.querySelector("#courses_container");
        console.log("Courses array is empty, add new course");
        if (coursesContainer) {
            coursesContainer.insertAdjacentHTML("afterbegin", "<h1>There is no courses to display, add new course</h1>");
        }
    }
    else {
        var coursesContainer = document.querySelector("#courses_container");
        if (coursesContainer) {
            for (var i = 0; i < courses.length; i++) {
                coursesContainer.insertAdjacentHTML("beforeend", "");
            }
        }
    }
}
function addNewCourseDetails() {
    var addCourseButton = document.querySelector("#add_course");
    var addCourseDetails = document.querySelector(".addCourseDetails_container");
    if (addCourseButton && !addCourseDetails) {
        addCourseButton.insertAdjacentHTML("afterend", '<div class="addCourseDetails_container"><p>Course Name</p><form onsubmit=addNewCourse(event)><input type="text" name="newCourseName" id="newCourseName" placeholder="Math..."><button type="submit">Add</button></form></div>');
    }
}
function addNewCourse(e) {
    e.preventDefault();
    var newCourseName = e.target.elements.newCourseName.value;
    fetch("/api/v1/add-course", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ newCourseName: newCourseName })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    })["catch"](function (error) {
        console.error(error);
    });
}
