function handleGetStudents() {
    try {
      fetch("/api/get-students")
        .then((res) => res.json())
        .then(({ students }) => {
          try {
            if (!students) throw new Error("didnt find students");
            
            renderStudents(students);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
}

function addStudent(ev){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;

        



    } catch (error) {
        console.error(error);  
    }
}


function handleAddUser(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const src = ev.target.elements.src.value;
      if (!name) throw new Error("No name");
      if (!src) throw new Error("No src");
      const newUser: any = { name, src };
  
      //send to server:
      fetch("/api/add-user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
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