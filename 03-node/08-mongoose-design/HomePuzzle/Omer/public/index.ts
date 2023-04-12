addEventListener("load", getStudents)
import bodyParser from "body-parser";
import { student } from "../API/students/studentModel";
import { course } from "../API/course/courseModel";
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
            const courses = student.courses;
            const coursesHtml = (courses as course[]).map((course) => {
                return `
                    <li>${course.name} <button onclick="deleteCourseFromStudent('${course._id}', '${student._id}')">Delete Course</button></li>
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

async function deleteCourseFromStudent(courseId:string, studentId:string) {
    try {
        const response = await fetch("/api/student/get-students");
        const students = await response.json();
        try {
            const response = await fetch("/api/student/delete-course", {
              method: "DELETE", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({studentId, courseId}),
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

async function deleteCourse(courseId:string) {
    try {
        const response = await fetch("/api/course/delete-course", {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({courseId}),
        });
        getCourses();
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
}

async function addCourse(_id:string) {
    try {
        const addCourse = document.getElementById("addCourse");
        if(!addCourse) throw new Error("addCourse not fount");
        addCourse.innerHTML = "";
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
        addCourse.appendChild(htmlSelect);
        const btn = document.createElement("button");
        btn.innerText = "Add";
        addCourse.appendChild(btn);
        btn.addEventListener("click",() => {
            addCourseHelper(htmlSelect.value, courses, _id)
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

async function addCourseHelper(_id:string, courses:course[], student_id:string) {
    try {
        const addCourse = document.getElementById("addCourse");
        if(!addCourse) throw new Error("addCourse not fount");
        addCourse.innerHTML = "";
        const index = courses.findIndex(course => _id == course._id)
        if(index == -1) throw new Error("course not found");
        console.log(courses[index]);
        const course = courses[index]
        try {
            const response = await fetch("/api/student/add-course", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({course, student_id}),
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