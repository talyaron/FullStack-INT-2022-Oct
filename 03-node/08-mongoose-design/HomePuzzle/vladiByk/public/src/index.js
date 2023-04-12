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
        .map((course) => `<div class="course" id="${course._id}">${course.name}</div>`)
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
    const courses = document.querySelectorAll(".course");
    courses.forEach((course) => course.addEventListener("click", () => {
        console.log("Course clicked...");
    }));
    const newCourseForm = document.querySelector("#newCourseForm");
    newCourseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const courseName = newCourseForm.querySelector("#addCourseName");
        console.log("New course created...");
        console.log(courseName.value);
        courseName.value = "";
    });
}
function saveNewCourse(courseName, teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`/api/v1/courses`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teacherId),
        });
    });
}
