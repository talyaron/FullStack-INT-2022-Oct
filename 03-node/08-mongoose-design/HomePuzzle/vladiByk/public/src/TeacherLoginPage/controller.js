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
function renderTeacherLogin() {
    root.innerHTML = `
    <h1>Teacher login page</h1>
    <form id="teacherLoginForm">
      <label for="teacherId"
        >Teacher ID:
        <input
          type="text"
          name="teacherId"
          id="teacherId"
          placeholder="Fdgg23fWe34..."
      /></label>
      <button type="submit">Enter</button>
    </form>`;
    const teacherLoginForm = document.querySelector("#teacherLoginForm");
    const teacherIdInput = document.querySelector("#teacherId");
    teacherLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        checkTeacherId(teacherIdInput.value);
        teacherIdInput.value = "";
    });
}
function checkTeacherId(teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teacher = yield fetch(`${teacherApi}/${teacherId}`)
                .then((res) => res.json())
                .then(({ teacher }) => teacher)
                .catch((error) => console.error(error));
            if (!teacher)
                throw new Error("Teacher not found!");
            // renderCoursePage(teacher._id);
            sessionStorage.setItem("teacherId", teacherId);
            location.href = "/teacher";
        }
        catch (error) {
            console.error(error);
        }
    });
}
