//  HANDLE functions Close
import fs from 'fs'

// function handleShowHideWindows(divClass:string) : void {
//   try {
    
//     const divHide = document.querySelector(".divHide") as HTMLDivElement
//     const divUnHide = document.querySelector(divClass) as HTMLDivElement
//       if (!divHide || !divUnHide) throw new Error('divHide or divUnHide dont exist!')
//       divHide.style.display = "none";
//       divUnHide.style.display = "block";

//     } catch (error) {
//       console.error(error)
//     }
//   }

  function hendelAdd (divClass: string) : void{
        try {
           renderAddClass(divClass)
        } catch (error) {
            console.error(error)
        }
  }

  function hendelUpdate (divClass: string) : void{
    try {
      // renderUpdateClass(divClass)
          
    } catch (error) {
        console.error(error)
    }

  }

  function hendelDelete (divClass: string) : void{
    try {
      // renderClass("Delete", divClass)

    } catch (error) {
        console.error(error)
    }

  }

  

// function handleViewGrades() {
//   try {
//     handleShowHideWindows()
//   } catch (error) {
//     console.error(error)
//   }
// }
// function handleddCourse(ev: any) {
//   try {
//     const html = renderAddCourse();

//     // openWindowsForm(html)
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function handleClickAddGrades(ev: any) {
//   const html = (await renderAddGrades()).toString();
//   openWindowsForm(html)
// }
// ///handle  submit ////////////////////////////////////////
// function handleChangeUserName() {
//   const rootUsersLogoSpan: HTMLSpanElement = document.querySelector('.app-container__header__iconUser-name')!
//   if (confirm("Are you sure to Change You Name ? ")) {
//     const newName = prompt("What Is your New Name ?")
//     if (newName === null) return
//     rootUsersLogoSpan.innerHTML = newName
//     fetch('/student/create-new-student', {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: newName
//       })
//     }).then((data) => {
//       console.log(data);
//     }).catch(err => console.log(err))
//     console.log("Implement delete functionality here");
//   } else {
//     return
//   }

// }
// async function handleSubmitAddGrade(ev: any) {
//   try {
//     ev.preventDefault();
//     const courseName = ev.target.elements.courseName.value;
//     const curCourse = await GetCurCourses(courseName)

//     const curTeacher = curCourse.teacher
//     const assignmentName = ev.target.elements.assignmentName.value
//     const score = ev.target.elements.score.value
//     const date = ev.target.elements.date.value

//     if (!courseName) throw new Error("No courseName");
//     if (!curCourse) throw new Error("No curCourse");
//     if (!assignmentName) throw new Error("No teacherCourse");
//     if (!score) throw new Error("No score");
//     if (!date) throw new Error("No date");

//     //send to server:
//     await fetch("/grades/add-grade", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         courseName: curCourse,
//         teacherName: curTeacher,
//         assignmentName,
//         score,
//         date
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error: any) => {
//         console.error(error.message);
//       });

//     grades()
//     handleClickCloseWindows()
//     getAverageFromDB()
//     ev.target.reset()
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function handleSubmitAddCourse(ev: any) {
//   try {
//     ev.preventDefault();
//     const courseName = ev.target.elements.CourseName.value;
//     const teacherCourse = ev.target.elements.teacherCourse.value

//     if (!courseName) throw new Error("No courseName");
//     if (!teacherCourse) throw new Error("No teacherCourse");

//     //send to server:
//     await fetch("/courses/add-course", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ courseName, teacherCourse }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error: any) => {
//         console.error(error.message);
//       });
//     handleClickCloseWindows()
//     ev.target.reset()
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function handleClickEditGrade(_id: string) {
//   try {
//     if (confirm("Are you sure to Edit This Grade? ")) {
//       const newScore = Number(prompt("Write the new Score ."))
//       if (!newScore) alert("you must to write a Number")
//       await fetch("/grades//update-grade-score", {
//         method: "PATCH",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           _id,
//           score: newScore
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//         })

//         .catch((error: any) => {
//           console.error(error.message);
//         });
//       getAverageFromDB()
//       grades()
//     } else {
//       return
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function handleClickDelGrade(_id: string) {
//   try {
//     console.log(_id);
//     if (confirm("Are you sure to Delete This Grade? ")) {
//       await fetch("/grades/delete-grade", {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ _id }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//         })

//         .catch((error: any) => {
//           console.error(error.message);
//         });
//       getAverageFromDB()
//       grades()
//     } else {
//       return
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function getAverageFromDB() {
//   try {
//     const gradeDB = await fetch('/grades/get-grades');
//     if (!gradeDB) throw new Error('no found Grades DB')
//     const dataJson = await gradeDB.json();
//     const average: Number | any = dataJson.grades.reduce((accumulator, currentValue) => {
//       return Number(accumulator) + Number(currentValue.score)
//     }, 0)

//     if (average) {
//       const averageHtml: HTMLElement = document.getElementById('average')!
//       averageHtml.innerText = (average / Number(dataJson.grades.length)).toFixed(2).toString()
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

