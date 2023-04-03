"use strict";
//  HANDLE functions LIST
exports.__esModule = true;
function handleCollapseMenuBtn() {
    try {
        var navBar = document.querySelector('.app-container__header__navbar');
        navBar.classList.toggle('active');
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickViewGrades() {
    try {
        // openWindowsForm()
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddGrades() {
    try {
        var html = renderAddGrade();
        openWindowsForm(html);
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddCourse() {
    try {
        // openWindowsForm()
    }
    catch (error) {
        console.error(error);
    }
}
//  HANDLE functions Close
function handleClickCloseWindows() {
    try {
        var containerToClose = document.querySelector('#rootContainerGradeChange');
        containerToClose.classList.remove('active');
    }
    catch (error) {
        console.error(error);
    }
}
function openWindowsForm(html) {
    var containerToClose = document.querySelector('#rootContainerGradeChange');
    containerToClose.classList.add('active');
    containerToClose.innerHTML = html;
}
function handleSubmitAddGrade(ev) {
    try {
        ev.preventDefault();
        var courseName = ev.target.elements.courseName.value;
        var assignmentName = ev.target.elements.assignmentName.value;
        var score = Number(ev.target.elements.score.value);
        var date = ev.target.elements.courseName.value;
        if (!courseName)
            throw new Error("no founded CourseName");
        if (!assignmentName)
            throw new Error("no founded assignmentName");
        if (!score)
            throw new Error("no founded score");
        if (!date)
            throw new Error("no founded date");
        fetch('/api/students', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseName: courseName,
                assignmentName: assignmentName,
                score: score,
                date: date
            })
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
