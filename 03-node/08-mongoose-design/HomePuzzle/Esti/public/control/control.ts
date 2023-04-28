
function hendelGoBack(){
  window.location.reload()
  
}

function hendelAddTeacher(ev: any) : void{
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    
    if (!name) throw new Error("No name");
    if (!email) throw new Error("No email");
    if (!password) throw new Error("No password");
    
    const newTeacher: any = { name, email, password };

    //send to server:
    fetch("/API/teacher/add-Teacher", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeacher),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}


function hendelAddStudent(ev: any) : void{
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    
    if (!name) throw new Error("No name");
    if (!email) throw new Error("No email");
    if (!password) throw new Error("No password");
    
    const newStudent: any = { name, email, password };

    //send to server:
    fetch("/API/student/add-Student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}



function hendelSingIn(studentTeachrName:string){
  try {
    // console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP")
    console.log(studentTeachrName)
    if(studentTeachrName === "teacher") handleGetTeachers()
    if(studentTeachrName === "student") handleGetStudents()

  } catch (error) {
      console.error(error)
    
  }
}




