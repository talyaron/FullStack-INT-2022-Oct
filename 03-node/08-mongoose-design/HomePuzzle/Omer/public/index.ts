addEventListener("load", getStudents)
import bodyParser from "body-parser";
import { student } from "../API/students/studentModel";
import { course } from "../API/course/courseModel";
import { grade } from "../API/grade/gradeModel";
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
            body: JSON.stringify({ name }),
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
            const grades = student.grades;
            const courses = student.courses;
            const coursesHtml = (courses as course[]).map((course) => {
                const index = grades.findIndex(grade => grade.courseName == course.name);                
                return `
                    <li>${course.name} Grade: ${grades[index].gradeNum} <button onclick="deleteCourseFromStudent('${course._id}', '${student._id}', '${course.name}')">Delete Course</button></li>
                `
            }).join(" ")
            return `
                <div class = "student">
                    <h1>Name: ${student.name}</h1>
                    <h2>Age: ${student.age}</h2>
                    <lu>
                        ${coursesHtml}
                    </lu>  
                    <button onclick="handleDelete('${student._id}')">Delete</button>
                    <button onclick="addCourse('${student._id}')">Add courses</button>  
                </div>        
            `
        }).join("")
        const display = document.getElementById("display");
        if (!display) throw new Error("Display not found");
        display.innerHTML = html;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteCourseFromStudent(courseId: string, studentId: string, courseName:string) {
    try {
        const response = await fetch("/api/student/get-students");
        const students = await response.json();
        try {
            const response = await fetch("/api/student/delete-course", {
                method: "DELETE", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ studentId, courseId }),
            });
            const response1 = await fetch("/api/grade/delete-grade", {
                method: "DELETE", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ studentId, courseName }),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
        getStudents();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getCourses() {
    try {
        const response = await fetch("/api/course/get-courses");
        const courses = await response.json();
        console.log(courses);
        const html = (courses as course[]).map((course) => {
            return `
            <h1>${course.name}</h1>
            <button onclick="deleteCourse('${course._id}')">Delete</button>
            `
        }).join("")
        const display = document.getElementById("display");
        if (!display) throw new Error("Display not found");
        display.innerHTML = html;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteCourse(courseId: string) {
    try {
        const response = await fetch("/api/course/delete-course", {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ courseId }),
        });
        getCourses();
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function addCourse(_id: string) {
    try {
        const addCourse = document.getElementById("addCourse");
        if (!addCourse) throw new Error("addCourse not fount");
        addCourse.innerHTML = "";
        const form = document.createElement("form");
        const response = await fetch("/api/course/get-courses");
        const courses = await response.json();
        console.log(courses);
        const htmlSelect = document.createElement("select")
        const html = (courses as course[]).map((course) => {
            const option = document.createElement("option")
            option.innerText = course.name;
            option.value = course._id;

            return option;
        });
        html.forEach((option) => {
            htmlSelect.appendChild(option)
        })
        form.appendChild(htmlSelect);
        const input = document.createElement("input");
        input.type = "number";
        input.required = true;
        form.appendChild(input)
        const btn = document.createElement("button");
        btn.innerText = "Add";
        form.appendChild(btn);
        addCourse.appendChild(form)
        form.addEventListener("submit", () => {
            addCourseHelper(htmlSelect.value, courses, _id, parseInt(input.value))
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

async function addCourseHelper(_id: string, courses: course[], student_id: string, grade: number) {
    try {
        const addCourse = document.getElementById("addCourse");
        if (!addCourse) throw new Error("addCourse not fount");
        addCourse.innerHTML = "";
        const index = courses.findIndex(course => _id == course._id)
        if (index == -1) throw new Error("course not found");
        console.log(courses[index]);
        const course = courses[index]
        const courseName = course.name;
        try {
            const response = await fetch("/api/student/add-course", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ course, student_id }),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
        try {
            const response = await fetch("/api/grade/add-grade", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ grade, student_id, courseName }),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
        getStudents()
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

