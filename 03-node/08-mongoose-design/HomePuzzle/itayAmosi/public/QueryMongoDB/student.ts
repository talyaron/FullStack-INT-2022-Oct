function renderStudentTable(StudentSchema) {
    try {
      if (!StudentSchema) throw new Error("No student found");
      const html = `<table id="customers">
               <tr>
                 <td>${StudentSchema._id}</td>
                 <td>${StudentSchema.name}</td>
                 <td>${StudentSchema.lastName}</td>
                 <td>${StudentSchema.CourseSchema}</td>
                 <td>${StudentSchema.GradeSchema}</td>
                 </tr>`;
                 const studentRoot = document.querySelector("#customers");
                 if (!studentRoot) throw new Error("student Root not found");
                 studentRoot.innerHTML += html;
              } catch (error) {
                  console.error(error);
              }
          }
          
          // <td>${student.courses[`${GradeSchema}`]}</td>
  
  
  function handelStudent() {
    try {
      fetch("/api/students/get-students")
        .then((res) => res.json())
        .then(({ students }) => {
          try {
            if (!students) throw new Error("didnt find student");
            students.forEach((student) => {
              renderStudentTable(student);
  
            });
  
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }