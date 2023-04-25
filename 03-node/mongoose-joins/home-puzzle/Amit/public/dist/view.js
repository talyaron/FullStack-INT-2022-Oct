function renderStudents(students) {
    try {
        if (!students)
            throw new Error("No students");
        var html = students
            .map(function (student) {
            return "\n          <div class=\"studentsContainer__studentCard\">\n                <div class=\"studentsContainer__studentCard__name\">\n                    <button onclick=\"handleStudentNameUpdate('" + student._id + "')\">update student name</button>\n                    <p id=\"studentName-" + student._id + "\" contenteditable=\"false\">" + student.name + "</p>\n                    <button id=\"saveNameBtn-" + student._id + "\" onclick=\"handleSaveStudentNameUpdate('" + student._id + "')\">save name</button>\n                </div>    \n                <div class=\"studentsContainer__studentCard__courses\">courses:\n                    <form onsubmit=\"handleAddCourse(event, '" + student._id + "')\">\n                        <input type=\"text\" name=\"course\" placeholder=\"course name\" required>\n                        <button type=\"submit\">add course</button>    \n                    </form>\n                </div>\n                <div id=\"courseRoot-" + student._id + "\"></div> \n                <button onclick=\"handleDeleteStudent('" + student._id + "')\">delete student</button>\n          </div>\n          ";
        })
            .join(" ");
        var studentsRoot = document.querySelector("#studentsRoot");
        if (!studentsRoot)
            throw new Error("studentsRoot not found on DOM");
        studentsRoot.innerHTML = html;
        renderCourses(students);
    }
    catch (error) {
        console.error(error);
    }
}
function renderCourses(students) {
    try {
        students.map(function (_student) {
            try {
                var _id_1 = _student._id;
                var student = students.find(function (student) { return student._id === _id_1; });
                if (!student)
                    throw new Error("student not found");
                var html = student.courses
                    .map(function (course) {
                    return "\n                        <div class=\"studentsContainer__studentCard__courses__course\">\n                            <div class=\"studentsContainer__studentCard__courses__course__name\">\n                                <button onclick=\"handleCourseUpdate('" + course._id + "')\">update course</button>\n                                <p id=\"course-" + course._id + "\" contenteditable=\"false\">" + course.name + "</p>\n                                <button id=\"saveCourseBtn-" + course._id + "\" onclick=\"handleSaveCourseUpdate('" + course._id + "', '" + _student._id + "')\">save course</button>\n                            </div>    \n                            <button onclick='handleDeleteCourse(\"" + course._id + "\", \"" + _student._id + "\")'>delete course</button>\n                            <div class=\"studentsContainer__studentCard__courses__course__grades\" id=\"gradesRoot-" + course._id + "\"></div>\n                            <button onclick=\"handleAddGrade('" + course._id + "', '" + _student._id + "')\">add grade</button>\n                        </div>\n                        ";
                })
                    .join(" ");
                var courseRoot = document.querySelector("#courseRoot-" + _id_1);
                if (!courseRoot)
                    throw new Error("course Root not found on DOM");
                courseRoot.innerHTML = html;
                renderGrades(student.courses, student);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderGrades(courses, student) {
    try {
        courses.map(function (_course) {
            try {
                var _id_2 = _course._id;
                var course_1 = courses.find(function (course) { return course._id === _id_2; });
                if (!course_1)
                    throw new Error("course not found");
                var courseIndex = courses.findIndex(function (course) { return course._id === _id_2; });
                if ((!courseIndex) && (courseIndex !== 0))
                    throw new Error("course Index not found");
                var Gradecounter_1 = 0;
                var html = course_1.grades
                    .map(function (grade) {
                    var _a;
                    Gradecounter_1++;
                    return "\n                            <div class=\"studentsContainer__studentCard__courses__course__grades__grade\">\n                                <div>#" + Gradecounter_1 + ":</div>\n                                <div id=\"grade-" + grade._id + "\" contenteditable=\"true\">" + ((_a = grade.grade) !== null && _a !== void 0 ? _a : "___") + "</div>\n                                <button onclick=\"handleGradeUpdate('" + grade._id + "')\">update grade</button>\n                                <button onclick='handleSaveGradeUpdate(\"" + course_1._id + "\", \"" + student._id + "\", \"" + grade._id + "\")'>save grade</button>\n                                <button onclick='handleDeleteGrade(\"" + course_1._id + "\", \"" + student._id + "\", \"" + grade._id + "\")'>delete grade</button>\n                            </div>\n                        ";
                })
                    .join(" ");
                var gradesRoot = document.querySelector("#gradesRoot-" + _id_2);
                if (!gradesRoot)
                    throw new Error("gradesRoot not found on DOM");
                gradesRoot.innerHTML = html;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
