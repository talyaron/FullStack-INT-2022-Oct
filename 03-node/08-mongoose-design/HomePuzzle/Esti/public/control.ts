

function hendelUserSingIn(event:any) : void{
  try{
    console.log(event)
    event.preventDefault();
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;

    
    const selected = document.getElementById('selected') as HTMLSelectElement
    const studentTeacherIndex = selected.selectedIndex
    let studentTeacher = ""

    if (studentTeacherIndex === 0)  studentTeacher = 'teacher';
    if (studentTeacherIndex === 1)  studentTeacher = 'student';

    if (!name) throw new Error("No name");
    if (!password) throw new Error("No password");

    
    // const newUser: any = { name, password };

    //     fetch("/API/users/singin-users")
    //       .then((res) => res.json())
    //       .then(({ users }) => {
    //         try {
    //           if (!users) throw new Error("didnt find users");
    //           console.log(users);
    //           renderUsers(users);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       });
      } catch (error) {
        console.error(error);
      }
    }
        
    //send to server:
    // fetch("/API/users/singin-user", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
      
  // } catch (error) {
  //   console.error(error);
  // }

// }

function handleUserNameUpdate(event: any, uid: string) {
  try {
    console.log(uid);
    const name = event.target.textContent;
    fetch("/api/users/update-user-name", {
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

function handleAddUser(event: any) {
  try {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No password");
    const newUser: any = { name, password };

    //send to server:
    fetch("/api/users/add-user", {
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

function handleDeleteUser(_id: string) {
  try {
    console.log(_id);

    fetch("/api/users/delete-user", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then(({ users }) => {
        renderUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

