"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function renderStudentsPage(studentsRootHtml, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const course = yield getCourse(courseId);
            root.innerHTML = `
        <h1>${course.name} student list</h1>
        <div id="studentsRoot">
          ${studentsRootHtml}
        </div>
        <h4>Add student</h4>
        <form id="addStudentForm">
            <label for="name"
            >Full name:
            <input type="text" name="fullName" id="name" placeholder="John Doe" required
            /></label>
            <label for="grade"
            >Grade: <input type="number" name="grade" id="grade" placeholder="88" min="0" max="100" required
            /></label>
            <button type="submit">Add</button>
        </form>
        <button id="backToCoursesPageBtn">return</button>
        <button id="deleteCourseBtn">delete course</button>
        <div class="editWindow"></div>
      `;
            const addStudentForm = root.querySelector("#addStudentForm");
            addStudentForm.addEventListener("submit", (e) => {
                e.preventDefault();
                handleAddStudentForm(addStudentForm, courseId);
            });
            const backToCoursesPageBtn = root.querySelector("#backToCoursesPageBtn");
            backToCoursesPageBtn.addEventListener("click", () => {
                location.href = "/teacher";
            });
            const deleteCourseBtn = root.querySelector("#deleteCourseBtn");
            deleteCourseBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                const courseId = sessionStorage.getItem("courseId");
                if (!courseId)
                    throw new Error("Course ID not found in session storage");
                yield deleteAllStudentsInCourse(courseId);
                yield deleteAllGradesInCourse(courseId);
                yield deleteCourse(courseId);
                location.href = "/teacher";
            }));
            activateDeleteStudentButtons();
            activateEditButtons(courseId);
        }
        catch (error) {
            console.log(error);
        }
    });
}
const displayStudents = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let studentsRootHtml = " ";
        const studentsInCourse = yield fetch(`${studentApi}/inCourse/${courseId}`)
            .then((res) => res.json())
            .then(({ students }) => {
            students.forEach((student) => __awaiter(void 0, void 0, void 0, function* () {
                const newStudent = new Student(student.name, student._id, courseId);
                const studentAvgScore = yield newStudent.getAverageInCourse(courseId);
                if (!studentAvgScore) {
                    studentsRootHtml += `
              <div class="studentDiv" id="${student._id}">
                  <b>${student.name}</b>
                  <span>-</span>
                  <div class="crudIcons">
                    <i class="fa-regular fa-trash-can"></i>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
              </div>`;
                }
                else {
                    studentsRootHtml += `
              <div class="studentDiv" id="${student._id}">
                  <b>${student.name}</b>
                  <span>${studentAvgScore.toFixed(2)}</span>
                  <div class="crudIcons">
                    <i class="fa-regular fa-trash-can"></i>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
              </div>`;
                }
                renderStudentsPage(studentsRootHtml, courseId);
            }));
        })
            .catch((error) => console.log(error));
        renderStudentsPage(studentsRootHtml, courseId);
    }
    catch (error) {
        console.error(error);
    }
});
function handleAddStudentForm(addStudentForm, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const newStudentName = addStudentForm.fullName.value;
        const newStudentGrade = addStudentForm.grade.value;
        const createdStudent = yield createStudent(newStudentName, courseId);
        yield createGrade(parseInt(newStudentGrade), courseId, createdStudent._id);
        displayStudents(courseId);
    });
}
function activateDeleteStudentButtons() {
    try {
        const deleteButtons = document.querySelectorAll(".fa-trash-can");
        deleteButtons.forEach((btn) => btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const studentDiv = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            const studentId = studentDiv.id;
            const courseId = sessionStorage.getItem("courseId");
            studentDiv.remove();
            yield fetch(`${studentApi}/${studentId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ courseId }),
            }).catch((error) => console.error(error));
        })));
    }
    catch (error) {
        console.log(error);
    }
}
function activateEditButtons(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const editButtons = root.querySelectorAll(".fa-pen-to-square");
        editButtons.forEach((btn) => btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const studentId = (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
            if (!studentId)
                throw new Error("Student id not found");
            const grades = yield getGradesInCourse(studentId, courseId);
            const student = yield getStudent(studentId);
            if (!grades)
                renderGradeList(grades, student.name, studentId, courseId);
            renderGradeList(grades, student.name, studentId, courseId);
        })));
    });
}
function renderGradeList(gradeList, studentName, studentId, courseId) {
    const editWindow = document.querySelector(".editWindow");
    let listItemsHtml;
    if (!gradeList)
        listItemsHtml = "";
    else {
        listItemsHtml = gradeList
            .map((grade) => `<li id="${grade._id}">
        <span>${grade.score.toFixed(2)}</span>
        <div class="listIcons">
          <i class="fa-regular fa-square-minus"></i>
          <i class="fa-solid fa-pen"></i>
        </div>
      </li>`)
            .join("");
    }
    editWindow.innerHTML = `
        <div class="editWindowHead">
          <h2>${studentName}</h2>
          <i class="fa-solid fa-user-pen"></i>
        </div>
        <ul class="gradesList" id="${courseId}">
            <div><b>Grades</b><b>Edit</b></div>
          ${listItemsHtml}
        </ul>
        <label for="newGrade">
          <input type="number" id="newGradeInput" placeholder="New grade..." />
          <input type="submit" id="addGradeBtn"/>
        </label>
        <button id="closeEditWindow">Done</button>
      `;
    editWindow.style.display = "flex";
    const closeEditWindowBtn = root.querySelector("#closeEditWindow");
    closeEditWindowBtn.addEventListener("click", () => {
        displayStudents(courseId);
        editWindow.style.display = "none";
    });
    activateEditUserName(studentId);
    activateEditGradeButtons();
    activateDeleteGradeBtn();
    activateAddGrade(courseId, studentId);
}
function activateEditUserName(studentId) {
    const editBtn = root.querySelector(".fa-user-pen");
    const editWindowHead = root.querySelector(".editWindowHead");
    const headerEle = editWindowHead.firstElementChild;
    const nameInputEle = document.createElement("input");
    nameInputEle.setAttribute("type", "text");
    nameInputEle.value = headerEle.innerHTML;
    editBtn.addEventListener("click", () => {
        editWindowHead.replaceChild(nameInputEle, headerEle);
        nameInputEle.focus();
    });
    nameInputEle.addEventListener("keyup", (e) => __awaiter(this, void 0, void 0, function* () {
        if (e.key === "Enter") {
            headerEle.innerHTML = nameInputEle.value;
            editWindowHead.replaceChild(headerEle, nameInputEle);
            yield fetch(`${studentApi}/${studentId}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ newName: nameInputEle.value }),
            });
        }
    }));
}
function activateEditGradeButtons() {
    const editGradeBtns = root.querySelectorAll(".fa-pen");
    editGradeBtns.forEach((btn) => btn.addEventListener("click", () => {
        var _a;
        const listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const gradeId = listEle.id;
        const iconDiv = listEle.querySelector(".listIcons");
        const spanEle = listEle.firstElementChild;
        const gradeInputEle = document.createElement("input");
        gradeInputEle.setAttribute("type", "number");
        gradeInputEle.value = spanEle.innerHTML;
        listEle.replaceChild(gradeInputEle, spanEle);
        gradeInputEle.focus();
        iconDiv.style.display = "none";
        gradeInputEle.addEventListener("keyup", (e) => __awaiter(this, void 0, void 0, function* () {
            if (e.key === "Enter") {
                if (Number(gradeInputEle.value) > 100 ||
                    Number(gradeInputEle.value) < 0 ||
                    !Number(gradeInputEle.value))
                    return alert("Check grade input");
                spanEle.textContent = gradeInputEle.value;
                listEle.replaceChild(spanEle, gradeInputEle);
                iconDiv.style.display = "flex";
                const updatedGrade = yield fetch(`${gradesApi}/${gradeId}`, {
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        newScore: parseInt(gradeInputEle.value),
                    }),
                })
                    .then((res) => res.json())
                    .then(({ grade }) => grade)
                    .catch((error) => console.error(error));
                const courseId = updatedGrade.course._id;
            }
        }));
    }));
}
function activateDeleteGradeBtn() {
    const deleteGradeBtns = root.querySelectorAll(".fa-square-minus");
    deleteGradeBtns.forEach((btn) => btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const listEle = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const gradeId = listEle.id;
        listEle.remove();
        const deletedGrade = yield fetch(`${gradesApi}/${gradeId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ grade }) => grade)
            .catch((error) => console.error(error));
    })));
}
function activateAddGrade(courseId, studentId) {
    const addGradeBtn = root.querySelector("#addGradeBtn");
    const newGradeInput = root.querySelector("#newGradeInput");
    addGradeBtn.addEventListener("click", addGrade);
    newGradeInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter")
            addGrade();
    });
    function addGrade() {
        return __awaiter(this, void 0, void 0, function* () {
            const newGrade = yield fetch(`${gradesApi}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    score: parseInt(newGradeInput.value),
                    courseId,
                    studentId,
                }),
            })
                .then((res) => res.json())
                .then(({ grade }) => grade)
                .catch((error) => console.error(error));
            const gradeList = yield getGradesInCourse(studentId, courseId);
            const student = yield getStudent(studentId);
            renderGradeList(gradeList, student.name, studentId, courseId);
            newGradeInput.value = "";
        });
    }
    newGradeInput.focus();
}
