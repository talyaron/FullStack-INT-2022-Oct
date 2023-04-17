const tbsu = document.querySelector(".teacherbtn")as HTMLButtonElement;
const sbsu = document.querySelector(".studentbtn")as HTMLButtonElement;

tbsu.addEventListener("click", renderTeacher)
sbsu.addEventListener("click", renderStudent)

function renderTeacher(){
 const choose = document.querySelector(".chooseOne")as HTMLDivElement;
 choose.style.display = "none";
 const divteacher = document.querySelector(".divteacher")as HTMLDivElement;
 divteacher.style.display = "flex"
  }

function renderStudent(){
    const choose = document.querySelector(".chooseOne")as HTMLDivElement;
    choose.style.display = "none";
    const divstudent = document.querySelector(".divstudent")as HTMLDivElement;
    divstudent.style.display = "flex";
    const divteacher = document.querySelector(".divteacher")as HTMLDivElement;
    divteacher.style.display = "none"

}