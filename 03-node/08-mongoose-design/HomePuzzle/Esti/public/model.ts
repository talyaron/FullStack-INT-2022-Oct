import { error } from "console";
import StudentModel, {
  Student,
  StudentSchema,
} from "../API/student/studnetsModel";

function handleDeleteStudent(_id: string) {
  try {
    fetch(
      "/apo/student/delete-student?" + new URLSearchParams({ _id }).toString(),
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        const studentForm = document.getElementById(_id);
        if (!studentForm) {
          throw new Error("student form");
        }
        studentForm.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};


function handleDeleteTeacher(_id:string){
    try {
        fetch("/api/teachers/delete-teacher?"+new URLSearchParams({_id}).toString(),  {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then(()=>{
            const teacherId = document.getElementById(_id)
            if(!teacherId){
                throw new Error("teacher deleted");
            }
            teacherId.remove();
          })  
          .catch((error)=>{
            console.error(error)
          }) 
    } catch (error) {
        console.error(error);

    }
}

function handleStudentNameUpdate(ev: any, _id: string) {
    try {
      const name = ev.target.textContent;
      fetch("/api/students/update-student-name?"+new URLSearchParams({name, _id}).toString(), {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

function handleTeacherNameUpdate(ev: any, _id: string) {
    try {
      const name = ev.target.textContent;
      fetch("/api/teachers/update-teacher-name?"+new URLSearchParams({name, _id}).toString(), {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  