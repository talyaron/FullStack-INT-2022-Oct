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
const teacherLoginForm = document.querySelector("#teacherLoginForm");
const teacherIdInput = document.querySelector("#teacherId");
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
            .then((data) => data)
            .catch((error) => console.error(error));
        console.log(courseList);
        teacherIdInput.value = "";
    });
}
