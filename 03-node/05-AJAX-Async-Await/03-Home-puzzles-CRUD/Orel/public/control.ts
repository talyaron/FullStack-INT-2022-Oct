
//  HANDLE functions LIST

import { response } from "express";

function handleCollapseMenuBtn(){
    try {
        const navBar = document.querySelector('.app-container__header__navbar')! as HTMLUListElement;
        navBar.classList.toggle('active')
    } catch (error) {
        console.error(error)
    }
}
function handleClickViewGrades(){
    try {
        // openWindowsForm()
    } catch (error) {
        console.error(error)
    }
}
function handleClickAddGrades(){
    try {
        const html = renderAddGrade();

        openWindowsForm(html)

    } catch (error) {
        console.error(error)
    }
}

function handleClickAddCourse(){
    try {
        // openWindowsForm()
    } catch (error) {
        console.error(error)
    }
}

//  HANDLE functions Close
function handleClickCloseWindows(){
    try {
            const containerToClose = document.querySelector('#rootContainerGradeChange')! as HTMLDivElement
            containerToClose.classList.remove('active')
    } catch (error) {
        console.error(error)
    }
}

function openWindowsForm(html:string):void{
    const containerToClose = document.querySelector('#rootContainerGradeChange')! as HTMLDivElement
    containerToClose.classList.add('active');
    containerToClose.innerHTML = html
}

function handleSubmitAddGrade(ev:any){
    try {
        ev.preventDefault()
        const courseName = ev.target.elements.courseName.value
        const assignmentName = ev.target.elements.assignmentName.value
        const score = Number(ev.target.elements.score.value)
        const date = ev.target.elements.courseName.value
        if(!courseName) throw new Error("no founded CourseName")
        if(!assignmentName) throw new Error("no founded assignmentName")
        if(!score) throw new Error("no founded score")
        if(!date) throw new Error("no founded date")
        fetch('/api/students' ,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                    courseName:courseName,
                    assignmentName:assignmentName,
                    score:score,
                    date:date
            })
        })
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error)
    }
}