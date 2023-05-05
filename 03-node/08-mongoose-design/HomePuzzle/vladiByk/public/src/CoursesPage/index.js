"use strict";
const teacherId = sessionStorage.getItem("teacherId");
if (teacherId)
    renderCoursePage(teacherId);
