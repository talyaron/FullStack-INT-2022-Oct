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
Object.defineProperty(exports, "__esModule", { value: true });
const root = document.querySelector("#root");
const teacherLoginForm = document.querySelector("#teacherLoginForm");
const teacherIdInput = document.querySelector("#teacherId");
const teacherLoginDiv = document.querySelector(".teacherLoginContainer");
teacherLoginForm.addEventListener("submit", displayTeacherCourses);
function displayTeacherCourses(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const teacherId = teacherIdInput.value;
        const courseList = yield fetch(`/api/v1/teachers/${teacherId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(({ courses }) => courses)
            .catch((error) => console.error(error));
        teacherIdInput.value = "";
        renderCoursesPage(courseList, teacherId);
    });
}
function renderCoursesPage(coursesList, teacherId) {
    root.innerHTML = "";
    root.innerHTML = `
  <h1>Available courses</h1>
  <div class="coursesRoot">
  
  ${coursesList
        .map((course) => `<div class="course" id="${course._id}">${course.name}
        <span class="deleteCourse">Delete</span></div>`)
        .join("")} 
    </div>
  <form id="newCourseForm">
    <label for="addCourseName">
      <input
        type="text"
        name="addCourseName"
        id="addCourseName"
        placeholder="Astrophysics..."
      />
    </label>
    <button type="submit">Add</button>
  </form>`;
    const deleteButtons = document.querySelectorAll(".deleteCourse");
    deleteButtons.forEach((btn) => btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        console.log(`delete btn with id ${(_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.id}...`);
        yield fetch(`/api/v1/courses/${(_b = btn.parentElement) === null || _b === void 0 ? void 0 : _b.id}`, {
            method: "Delete",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ teacherId }),
        })
            .then((res) => res.json())
            .then(({ courses }) => renderCoursesPage(courses, teacherId))
            .catch((error) => console.error(error));
    })));
    const courses = document.querySelectorAll(".course");
    courses.forEach((course) => course.addEventListener("click", () => {
        console.log(`Course clicked...`);
        renderStudentPage(course.id);
    }));
    saveNewCourse(coursesList, teacherId);
}
function saveNewCourse(coursesList, teacherId) {
    const newCourseForm = document.querySelector("#newCourseForm");
    newCourseForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const courseName = newCourseForm.querySelector("#addCourseName");
        const newCourse = yield fetch(`/api/v1/courses`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: courseName.value, teacherId }),
        })
            .then((res) => res.json())
            .then(({ course }) => course)
            .catch((error) => console.error(error));
        coursesList.push(newCourse);
        courseName.value = "";
        renderCoursesPage(coursesList, teacherId);
    }));
}
function renderStudentPage(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const studentList = yield fetch(`${studentApi}/${courseId}`)
            .then((res) => res.json())
            .then(({ students }) => students
            .map((student) => new Student(student.name, student._id))
            .join(""))
            .catch((error) => console.error(error));
        let html = `<div class="studentDiv">
  <b>Vladislav Bykanov (test)</b>
  <span>Average: 66 (test)</span>
  <div class="crudIcons">
    <i class="fa-regular fa-trash-can"></i>
    <i class="fa-regular fa-pen-to-square"></i>
   </div>
  </div>`;
        if (studentList) {
            html = studentList
                .map((student) => `<div class="studentDiv" id="${student.id}">
          <b>${student.name}</b>
          <span>Average: ${student}</span>
          <div class="crudIcons">
            <i class="fa-regular fa-trash-can"></i>
            <i class="fa-regular fa-pen-to-square"></i>
           </div>
          </div>`)
                .join("");
        }
        root.innerHTML = `
  <h1>Student list</h1>
  <div class="studentsContainer">
  ${html}
  </div>
  <h4>Add student</h4>
  <form id="addStudentForm">
    <label for="name"
      >Full name:
      <input type="text" name="fullName" id="name" placeholder="John Doe"
    /></label>
    <label for="grade"
      >Grade: <input type="number" name="grade" id="grade" placeholder="88"
    /></label>
    <button type="submit">Add</button>
  </form>`;
        saveNewStudent(courseId);
    });
}
function saveNewStudent(courseId) {
    const addStudentForm = document.querySelector("#addStudentForm");
    addStudentForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const name = addStudentForm.fullName.value;
        const grade = addStudentForm.grade.value;
        const newStudent = yield fetch(`${studentApi}`, {
            method: "POST",
            body: JSON.stringify({ name, courseId }),
        }).catch((error) => console.error(error));
    }));
}
