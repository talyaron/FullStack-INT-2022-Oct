const container = document.querySelector(".container") as HTMLDivElement
const showHidePw = document.querySelectorAll(".showHidePw") as NodeListOf<HTMLElement>
const pwInputs = document.querySelectorAll(".input-password") as NodeListOf<HTMLInputElement>

showHidePw.forEach((eyeIcon: HTMLElement) => {
    eyeIcon.addEventListener("click", () => {
        pwInputs.forEach((pwInput: HTMLInputElement) => {
            if(pwInput.type === "password"){
                console.log("text")
                pwInput.type = "text"

                showHidePw.forEach((icon: HTMLElement) => {
                    icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            }else{
                pwInput.type = "password"

                showHidePw.forEach((icon: HTMLElement) => {
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
});

//-----Registeration
function register(ev:any){
    try{
        ev.preventDefault()

        const fullname = ev.target.elements.fullname.value
        const email = ev.target.elements.email.value
        const password = ev.target.elements.password.value

        if(!fullname) throw new Error("No fullname found")
        if(!email) throw new Error("No email found")
        if(!password) throw new Error("No password found")

        const newUser:any = { fullname, email, password }

        //Send to server
        fetch("/api/users/register", {
            method: 'POST',
            //כותרות - מציינות את סוג הנתונים בגוף הבקשה ואת סוג הנתונים המצפים להתקבל בתגובה
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //מכיל את הפרמטרים שנשלחו בבקשה וממיר למחרוזת ג'ייסון
            body:JSON.stringify(newUser)
            /*
                לאחר קבלת התגובה מהשרת, הקוד ממיר את התוכן לפורמט ג'ייסון
                ומדפיס את הנתונים בטרמינל.
                במידה והבקשה תכשל, תודפס שגיאה בטרמינל.
            */
        }).then((res) => res.json())
        .then(data => {console.log(data)
        })
        .catch(error=> {
            console.error(error)
        })

    }catch(error){
        console.error(error)
    }
}

//-----login
function login(ev:any){
    try{
        ev.preventDefault()

        const email = ev.target.elements.email.value
        const password = ev.target.elements.password.value

        if(!email) throw new Error("No email found")
        if(!password) throw new Error("No password found")

        //Send to server
        fetch("/api/users/login", { 
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
            
        }).then((res) => res.json())
        .then((data) => {console.log(data)})
        .catch(error=> {
            console.error(error)
        })

    }catch(error){
        console.error(error)
    }
}
