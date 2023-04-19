interface User {
   name: string;
   password: string;
   email?: string;
  
 }


const tbsu = document.querySelector(".teacherbtn")as HTMLButtonElement;
const sbsu = document.querySelector(".studentbtn")as HTMLButtonElement;
tbsu.addEventListener("click", renderTeacher)
sbsu.addEventListener("click", renderStudent)

    

function renderTeacher(){
 const choose = document.querySelector(".chooseOne")as HTMLDivElement;
 choose.style.display = "none";
 const divteacher = document.querySelector(".divteacher")as HTMLDivElement;
 divteacher.style.display = "flex"
 const divstudent = document.querySelector(".divstudent")as HTMLDivElement;
    divstudent.style.display = "none";

 const html = `
 <button class="goBackBtn" onclick="hendelGoback()">go back</button>
    <form class="signup__formTeacher">
    <label for="tname" class="signup__formTeacher__label">Student Name</label>
    <input id="nameInput" type="text" name="tname" placeholder="enter name" required class="signup__formTeacher__inputt">
    <br>
    <label for="temail" class="signup__formTeacher__label">Student Email</label>
    <input id="nameEmail" type="email" name="temail" placeholder="enter email" required class="signup__formTeacher__inputt">
    <br>
    <label for="tpassword" class="signup__formTeacher__label">Student Password</label>
    <input id="namePassword" type="password" name="tpassword" placeholder="enter password" required class="signup__formTeacher__inputt">
    <button type="button" class="signUpBtn" onclick="signUpBtn()">Sign Up</button>
 </form>`

    divteacher.innerHTML = html
  }

function renderStudent(){
    const choose = document.querySelector(".chooseOne")as HTMLDivElement;
    choose.style.display = "none";
    const divstudent = document.querySelector(".divstudent")as HTMLDivElement;
    divstudent.style.display = "flex";
    const divteacher = document.querySelector(".divteacher")as HTMLDivElement;
    divteacher.style.display = "none"

    const html = `
    <button class="goBackBtn" onclick="hendelGoback()">go back</button>
    <form class="signup__formTeacher">
    <label for="tname" class="signup__formTeacher__label">Student Name</label>
    <input id="nameInput" type="text" name="tname" placeholder="enter name" required class="signup__formTeacher__inputt">
    <br>
    <label for="temail" class="signup__formTeacher__label">Student Email</label>
    <input id="nameEmail" type="email" name="temail" placeholder="enter email" required class="signup__formTeacher__inputt">
    <br>
    <label for="tpassword" class="signup__formTeacher__label">Student Password</label>
    <input id="namePassword" type="password" name="tpassword" placeholder="enter password" required class="signup__formTeacher__inputt">
    <button type="button" class="signUpBtn" onclick="signUpBtn()">Sign Up</button>
 </form>
 `

 divstudent.innerHTML = html
}

function hendelGoback() {
   
    const choose = document.querySelector(".chooseOne")as HTMLDivElement;
    choose.style.display = "block";
    const divstudent = document.querySelector(".divstudent")as HTMLDivElement;
    divstudent.style.display = "none";
    const divteacher = document.querySelector(".divteacher")as HTMLDivElement;
    divteacher.style.display = "none"

}


function signUpBtn(ev: any) {
   try {
    //  ev.preventDefault();
     const name = ev.target.elements.name.value;
     const password= ev.target.elements.password.value;
     const email= ev.target.elements.email.value;
     if (!name) throw new Error("No name");
     if (!password) throw new Error("No password");
     if (!email) throw new Error("No email insert");
     const newUser: any = { name, password, email };
 
     //send to server:
     fetch("http://localhost:3000/API/userLogin/signUp", {
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
 
























// async function signUpBtn(){
//    let nameInput = document.getElementById("nameInput")as HTMLInputElement
//    let namePassword = document.getElementById("namePassword")as HTMLInputElement
//    let nameEmail = document.getElementById("nameEmail")as HTMLInputElement
//    const options = {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json' ,
//        'Set-Cookie': 'token = 33'
//    },
//    body: JSON.stringify({ name: nameInput.value, password: namePassword.value, email: nameEmail.value })
// }

// try {
//    let result = await fetch(`http://localhost:3000/API/userLogin/signUp`, options);
//    result = await result.json();
//    console.log(result)
   
// }
// catch (err){
//    console.log(err)
//    console.log("no");
// }
    
// }