
// catch all navbar
const welcomeH1 = document.querySelector(".targ")as HTMLHeadElement;
startApp()

const newc = document.querySelector("#newC")as HTMLDivElement;
   const dairy = document.querySelector("#dairy")as HTMLDivElement;
   const clinet = document.querySelector("#clinet")as HTMLDivElement;
   const mlay = document.querySelector("#mlay")as HTMLDivElement;
   const sapak = document.querySelector("#spak")as HTMLDivElement;
   const todo = document.querySelector("#todo")as HTMLDivElement;



   function startApp(){
 
  const firstName = (JSON.parse(localStorage.getItem("userName")!))
   const password = (JSON.parse(localStorage.getItem("userPass")!));
     welcomeH1.textContent = "welcome "+firstName;
      }


   function renderNewcustomer(){
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

   

