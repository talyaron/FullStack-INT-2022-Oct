
// catch all navbar
const welcomeH1 = document.querySelector(".targ")as HTMLHeadElement;
startApp()
let newc = document.querySelector("#newC")as HTMLDivElement;
   let dairy = document.querySelector("#dairy")as HTMLDivElement;
   let clinet = document.querySelector("#clinet")as HTMLDivElement;
   let mlay = document.querySelector("#mlay")as HTMLDivElement;
  let sapak = document.querySelector("#sapak")as HTMLDivElement;
   let todo = document.querySelector("#todo")!as HTMLDivElement;



   function startApp(){
 
  const firstName = (JSON.parse(localStorage.getItem("userName")!))
   const password = (JSON.parse(localStorage.getItem("userPass")!));
     welcomeH1.textContent = "welcome "+firstName;

     
      }


   function renderNewCustomer(){
   try {
    todo.style.display = "none"
    newc.style.display = "block"
    dairy.style.display = "none"
    clinet.style.display = "none"
    mlay.style.display = "none"
   sapak.style.display = "none"
 } catch (error) {
  console.error(error);
 }
 }
function renderDairy(){
   try {
    todo.style.display = "none"
    newc.style.display = "none"
    dairy.style.display = "block"
    clinet.style.display = "none"
    mlay.style.display = "none"
   sapak.style.display = "none"
 } catch (error) {
  console.error(error);
 }
 }
function renderCustomer(){
   try {
    sapak.style.display = "none"
    todo.style.display = "none"
    newc.style.display = "none"
    dairy.style.display = "none"
    clinet.style.display = "block"
    mlay.style.display = "none"
 } catch (error) {
  console.error(error);
 }
 }
function renderMlay(){
   try {
    sapak.style.display = "none"
    todo.style.display = "none"
    newc.style.display = "none"
    dairy.style.display = "none"
    clinet.style.display = "none"
    mlay.style.display = "block"
 } catch (error) {
  console.error(error);
 }
 }
function renderSapakim(){
   try {
  sapak.style.display = "block"
  todo.style.display = "none"
  newc.style.display = "none"
  dairy.style.display = "none"
  clinet.style.display = "none"
  mlay.style.display = "none"
 
 } catch (error) {
  console.error(error);
 }
 }

function renderTodolist(){
   try {
  todo.style.display = "block"
  newc.style.display = "none"
  dairy.style.display = "none"
  clinet.style.display = "none"
  mlay.style.display = "none"
 sapak.style.display = "none"
  } catch (error) {
  console.error(error);
 }
 }

   
function todoListRuns(){
   const btnadd = document.querySelector("#btnadd")as HTMLButtonElement;
   const inp = document.querySelector
   (".addMession")as HTMLInputElement;
  
   
}
