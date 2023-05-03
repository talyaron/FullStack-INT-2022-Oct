import { json } from "body-parser";

interface User {
    name: string;
    email:string;
}

function handelAddUser(ev: any){
    try {
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        const email = ev.target.elements.email.value;
        if(!name) throw new Error("no name!")
        if(!password) throw new Error("no password!!!")
        if(!email) throw new Error("no email!")

        const newUser: any = {name,password,email};

        fetch("/api/users/add-user",{
            method:"POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
        })
        .then((res) => {
            // console.log(data);
        })
    } catch (error: any) {
        console.error("coudlds complete the add user")
    }
}