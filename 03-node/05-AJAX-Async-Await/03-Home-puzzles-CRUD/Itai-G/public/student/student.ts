interface IStudent {
  uid: string;
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
  avg:number
}
function renderStudentDiv(student: IStudent) {
  try {
    if (!student) throw new Error("No student Root div found");

    const html = 
      `<div class="form">
         <div class="title">Welcome To Student Grades</div>
         <div class="subtitle">This is the list of your grades in classes</div>
         <div id="window" class="input-container ic1">
           <h2>student name:${student.name}</h2>
         </div>
         <div id="window" class="input-container ic2 windowNum1">
           <h2>English class:${student.englishClass}</h2>
         </div>
         <div id="window" class="input-container ic2 windowNum2">
           <h2>math class":${student.mathClass}</h2>
         </div>
         <div id="window" class="input-container ic2 windowNum3">
           <h2>Sports class:${student.sportsClass}</h2>
         </div>
         <div id="window" class="input-container ic2 windowNum4">
           <h2>History class:${student.historyClass}</h2>
         </div>
         <div id="avgRoot" class="input-container ic2">
           <h2>Your Average is:${student.avg}</h2>
         </div>
         <button id="avgBtn" type="submit" class="submit" onclick="calc(event);">Average</button>
         <button onclick="handleDeleteStudent('${student.uid}')">DELETE</button>
         </div>`;

    const studentRoot = document.querySelector("#studentRoot");
    if(!studentRoot) throw new Error("student Root not found");

    studentRoot.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}
  function handelStudent() {
    console.log("test");
try {
    fetch("/api/get-students")
    .then((res) => res.json())
    .then(({ students }) => {
        try {
            if (!students) throw new Error("didnt find student");
          students.forEach(student => {
            renderStudentDiv(student);
          });
          } catch (error) {
            console.error(error);
          }
    })
} catch (error) {
    console.error(error);
}
 }

 function handleAvgSubmit(doc: HTMLElement) {
  doc.addEventListener("submit", (event: any) => {
    event.preventDefault();
    console.log(event.target.elements.studentName);
    const name = event.target.elements.studentName.value;
    const englishClass = event.target.elements.englishC.value;
    const mathClass = event.target.elements.mathC.value;
    const sportsClass = event.target.elements.sportsC.value;
    const historyClass = event.target.elements.historyC.value;
    if (!name) throw new Error("can't find name");
    if (!englishClass) throw new Error("can't find englishClass");
    if (!mathClass) throw new Error("can't find mathClass");
    if (!sportsClass) throw new Error("can't find sportsClass");
    if (!historyClass) throw new Error("can't find historyClass");


    fetch("/api/add-student-grades", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then(() => {
        event.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  });
}


function handleDeleteStudent(uid: string) {
  try {
    console.log("Deleting student with uid: ", uid);

    fetch("/api/delete-student", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    })
      .then((res) => res.json())
      .then(({ students }) => {
        renderStudentDiv(students);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}