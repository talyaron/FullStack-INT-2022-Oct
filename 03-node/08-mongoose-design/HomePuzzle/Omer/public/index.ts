addEventListener("load", getStudents)
import bodyParser from "body-parser";
import { student } from "../API/students/studentModel";
async function formHandler(ev: any) {
    ev.preventDefault();
    console.log(ev);
    const name = ev.target.elements.name.value;
    const age = ev.target.elements.age.value;
    const newStudent = { name, age };
    try {
        const response = await fetch("/api/student/add-student", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age }),
        });
        ev.target.reset();
        const result = await response.json();
        console.log("Success:", result);
        getStudents()
    } catch (error) {
        console.error("Error:", error);
    }
}

async function formCourseHandler(ev: any) {
    try {
        ev.preventDefault();
        console.log(ev);
        const name = ev.target.elements.name.value;
        const response = await fetch("/api/course/add-course", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name}),
        });
        ev.target.reset();
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getStudents() {
    try {
        const response = await fetch("/api/student/get-students");
        const students = await response.json();
        const html = (students as student[]).map((student) => {
            return `
                <h1>${student.name}</h1>
                <h2>${student.age}</h2>  
                <button onclick="handleDelete('${student._id}')">Delete</button>          
            `
        }).join("")
        const display = document.getElementById("display");
        if (!display) throw new Error("Display not found");
        display.innerHTML = html;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function handleDelete(_id: string) {
    try {
        const response = await fetch("/api/student/delete-student", {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id }),
        }).then((res) => res.json()).then((students) => {
            getStudents()
        })

        console.log("Success:");
    } catch (error) {
        console.error("Error:", error);
    }
}