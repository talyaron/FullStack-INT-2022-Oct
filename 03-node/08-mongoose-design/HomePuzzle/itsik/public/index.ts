interface User {
   name: string;
   password: string | number;
  
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
    <label for="tname" class="signup__formTeacher__label">Teacher Name</label>
    <input type="text" name="tname" placeholder="enter name"  class="signup__formTeacher__inputt">
    <br>
    <label for="temail" class="signup__formTeacher__label">Teacher Email</label>
    <input type="email" name="temail"placeholder="enter email" class="signup__formTeacher__inputt">
    <br>
    <label for="tpassword" class="signup__formTeacher__label">Teacher Password</label>
    <input type="password" name="tpassword" placeholder="enter password" class="signup__formTeacher__inputt">
    <br>
    <button class="signUpBtn" onclick="signUpBtn()">Sign Up</button>
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
    <input type="text" name="tname" placeholder="enter name" required class="signup__formTeacher__inputt">
    <br>
    <label for="temail" class="signup__formTeacher__label">Teacher Email</label>
    <input type="email" name="temail" placeholder="enter email" required class="signup__formTeacher__inputt">
    <br>
    <label for="tpassword" class="signup__formTeacher__label">Teacher Password</label>
    <input type="password" name="tpassword" placeholder="enter password" required class="signup__formTeacher__inputt">
    <button class="signUpBtn" onclick="signUpBtn()">Sign Up</button>
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

// function signUpBtn(){
//   if() 
    
// }