function renderFormTeacher() {
  try {
    const divElement = document.createElement('form');
    divElement.setAttribute(`class`, 'form');
    divElement.setAttribute(`id`, 'teacherForm');
    divElement.innerHTML = `
           <div  class="title">Welcome Back Teacher</div>
           <div class="subtitle">Please enter student data and grades!</div>
           <div class="input-container ic1">
             <input name="studentName" class="input" type="text" placeholder=" " />
             <div class="cut"></div>
             <label for="studentName" class="placeholder">student name</label>
           </div>
           <div class="input-container ic2">
             <input name="englishC" class="input" type="text" placeholder=" " />
             <div class="cut cut-short"></div>
             <label for="englishC" class="placeholder">English class</label>
           </div>
           <div class="input-container ic2">
             <input name="mathC" class="input" type="text" placeholder=" " />
             <div class="cut cut-short"></div>
             <label for="mathC" class="placeholder">Math class</label>
           </div>
           <div class="input-container ic2">
             <input name="sportsC" class="input" type="text" placeholder=" " />
             <div class="cut cut-short"></div>
             <label for="sportsC" class="placeholder">Sports class</label>
           </div>
           <div class="input-container ic2">
             <input name="historyC" class="input" type="text" placeholder=" " />
             <div class="cut cut-short"></div>
             <label for="historyC" class="placeholder">History class</label>
           </div>
           <button type="submit" class="submit">submit</button>
           <button class="submit" onclick="addMockStudent()">add mock student</button>
`;
    const teacherRoot = document.querySelector("#teacherRoot");
    if (!teacherRoot) throw new Error("Grid container not found");
    teacherRoot.appendChild(divElement);
    handleSubmit(divElement)
  } catch (error) {
    console.error(error);
  }
}
function addMockStudent() {
  fetch("/api/students/add-mock-student", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    
}

function handleSubmit(doc: HTMLElement) {
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
    const newStudent = {
      name,
      englishClass,
      mathClass,
      sportsClass,
      historyClass,
    };
    console.log(newStudent);
    fetch("/api/students/add-student-grades", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
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
