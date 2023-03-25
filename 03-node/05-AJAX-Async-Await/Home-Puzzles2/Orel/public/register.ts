import { response } from "express";

function handleSubmitLogin(ev:any){
    try {
        ev.preventDefault()
        const email = ev.target.elements.email.value
        const password = ev.target.elements.password.value;
        
        checkMatchUser(email , password)

    } catch (error) {
        console.error(error)
    }
}

function checkMatchUser(email:string , password:string){
    try {
        fetch('/api/admins')
        .then(response=>response.json())
        .then(data =>{
            data.find(admin=>{
                console.log(admin);
                if(admin.password === password && admin.email === email){
                    localStorage.setItem("admin" , "true")
                    window.location.href = "/"
                } else {
                    console.log("no Match");
                }

            })
        })
    } catch (error) {
        console.error(error)
    }
}