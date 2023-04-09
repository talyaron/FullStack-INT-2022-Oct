function renderOptionsWithCourses() {
    try {
        fetch('/api/students/courses')
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            var result = data.courseNames.map(function (c) {
                return c;
            }).join('');
            renderAddGrade(result);
            console.log(renderAddGrade(result));
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddCourse() {
    var addCourse = "\n    <div id=\"btnExit\">\n    <i class=\"fa-solid fa-xmark\" onclick=\"handleClickCloseWindows()\"></i>\n    </div>\n    <form class=\"app-container__main__form\" id=\"rootForm\" onsubmit=\"handleSubmitAddCourse(event)\">\n    <h3>ADD New Course</h3>\n    <input type=\"text\" placeholder=\"Enter Course Name\" name=\"CourseName\">\n \n    <input type=\"text\"  placeholder=\"Enter Teacher Course\" name=\"teacherCourse\">\n \n    <button type=\"submit\">ADD</button>\n    </form>\n    ";
    return addCourse;
}
function renderAddGrade() {
    var addGrade = "\n    <div id=\"btnExit\">\n    <i class=\"fa-solid fa-xmark\" onclick=\"handleClickCloseWindows()\"></i>\n    </div>\n    <form class=\"app-container__main__form\" id=\"rootForm\" onsubmit=\"handleSubmitAddGrade(event)\">\n    <h3>ADD GRADE</h3>\n    <select placeholder=\"Enter Course Name\" name=\"courseName\" id=\"rootSelectOptions\">\n\n    </select>\n    <input type=\"text\" placeholder=\"Enter Assignment Name\" name=\"assignmentName\">\n    <div>\n    <input type=\"number\" min=\"0\" max=\"100\" placeholder=\"Enter Score\" name=\"score\">\n    <input type=\"date\" name=\"date\" >\n    </div>\n    <button type=\"submit\">ADD</button>\n    </form>\n    ";
    return addGrade;
}
function renderAllGrade() {
    var topGrade = "\n<ul class=\"header-grades-top-list\">\n<li class=\"header-grades-list__courseName\">#</li>\n<li class=\"header-grades-list__courseName\">Student Name</li>\n<li class=\"header-grades-list__courseName\">Course Name</li>\n<li class=\"header-grades-list__courseName\">Teacher Name</li>\n<li class=\"header-grades-list__courseName\">Assignment Name</li>\n<li class=\"header-grades-list__courseName\">Score</li>\n<li class=\"header-grades-list__courseName\">Date</li>\n<li class=\"header-grades-list__courseName\">Edit/Delete</li>\n</ul>\n\n";
    var oneGrade = "\n<div class=\"grade\">\n<ul class=\"header-grades-main-list\">\n    <li class=\"header-grades-list__courseName\">01</li>\n    <li class=\"header-grades-list__courseName\">Orel Karako</li>\n    <li class=\"header-grades-list__courseName\">React</li>\n    <li class=\"header-grades-list__courseName\">Tal Madrid</li>\n    <li class=\"header-grades-list__courseName\">AppList</li>\n    <li class=\"header-grades-list__courseName\">98</li>\n    <li class=\"header-grades-list__courseName\">25/11/2022</li>\n    <li class=\"header-grades-list__courseName\">\n        <i class=\"fa-solid fa-pen-to-square\"></i>\n        <i class=\"fa-solid fa-delete-left\"></i>\n    </li>\n</ul>\n</div>\n\n";
    var footerGrade = "\n<ul class=\"header-grades-footer-list\">\n<h3>your average :\n    <span>80</span>\n</h3>\n</ul>\n";
    var allGrade = topGrade + oneGrade + footerGrade;
    return allGrade;
}
