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
function renderCoursePage(teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        const teacher = yield getTeacher(teacherId);
        const courses = yield getTeacherCourses(teacherId);
        root.innerHTML = `
      <h1>${teacher.name} courses</h1>
      <div id="coursesRoot">
      </div>
      <form id="addCourseForm">
        <label for="courseName">
          <input
            type="text"
            name="courseName"
            id="courseName"
            placeholder="Astrophysics..."
          />
        </label>
        <button type="submit">Add</button>
      </form>
      `;
        renderCoursesRoot(courses);
        const addCourseForm = root.querySelector("#addCourseForm");
        addCourseForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const courseName = addCourseForm.courseName.value;
            addCourse(courseName, teacherId);
        });
        const coursesBtn = root.querySelectorAll(".course");
        coursesBtn.forEach((btn) => btn.addEventListener("click", () => {
            sessionStorage.setItem("courseId", btn.id);
            location.href = '/course';
            // displayStudents(btn.id);
        }));
    });
}
function addCourse(courseName, teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${courseApi}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseName, teacherId }),
        }).catch((error) => console.error(error));
        renderCoursePage(teacherId);
    });
}
function renderCoursesRoot(coursesList) {
    const coursesRoot = document.querySelector("#coursesRoot");
    coursesRoot.innerHTML = coursesList
        .map((course) => `<button class="course" id="${course._id}">${course.name}</button>`)
        .join("");
}
