interface IStudent {
  name: string;
  englishClass: number;
  mathClass: number;
  sportsClass: number;
  historyClass: number;
  uid: string;
  avg: number;
}


function renderStudentDiv(student: IStudent) {
    try {
      if (!student) throw new Error("No student Root div found");
  const html = 
             `<div id="${student.uid}" class="form">
             <div class="title">Welcome To Student Grades</div>
             <div class="subtitle">This is the list of your grades in classes</div>
             <div id="window" class="input-container ic1">
               <h2 contenteditable oninput="handleStudentNameUpdate(event, '${student.uid}')">${student.name}</h2>
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
               <h2>Yor Average is:${student.avg}</h2>
             </div>
             <button class="submit" onclick='handleDeleteStudent("${student.uid}")'>DELETE</button>
             </div>`;
             const studentRoot = document.querySelector("#studentRoot")
             if(!studentRoot) throw new Error("student Root not found")
             studentRoot.innerHTML += html;
            } catch (error) {
              console.error(error);
            }
          };
          
          
          // <button id="avgBtn" type="submit" class="submit" onclick="calc(event);">Average</button>


  function handelStudent() {
try {
    fetch("/api/students/get-students")
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

function handleDeleteStudent(uid: string) {
  try {
    fetch("/api/students/delete-student", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    })
    .then(()=> {
      const studentForm = document.getElementById(uid)

      if(!studentForm) {
        throw new Error("Could not find student form");
      }
      studentForm.remove();
    })

      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleStudentNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/students/update-student-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid }),
    });
  } catch (error) {
    console.error(error);
  }
}
