
const userLogInFromStorage = localStorage.getItem("userLogIn") as string
const usersOptionsBtn1 =   document.querySelector('.users-options-after-login')! as HTMLElement ; 
const usersOptionsBtn =   document.querySelector('.users-options')! as HTMLElement ; 
//Update Date From array TO LocalStorage
// updateInfoToLocalStorage()
let usernameUser:string
let emailUser:string 
if(lastUserIn){
    usernameUser = lastUserIn.username as string;
    emailUser = lastUserIn.email as string;
}


// of Login
if( userLogInFromStorage === "true") {
    if(!usersOptionsBtn || !usersOptionsBtn1) throw new Error("the Btn element not found")
    usersOptionsBtn.style.display = "none";
    usersOptionsBtn1.style.display = "flex";
    
   } else {
    if(usersOptionsBtn || usersOptionsBtn1) {
        usersOptionsBtn1.style.display = "none";
        usersOptionsBtn.style.display = "block";
    }

   }

  // Logout BTN ON 
  openMenuLogoutBtn()
  renderPhotoCard(animals ,"animalsList")
renderPhotoCard(animals ,"animalsList")

renderPhotoCard(backgrounds ,"backgroundList")
renderPhotoCard(backgrounds ,"backgroundList")

// RENDER MAIN HOME PAGE PHOTOS

if(insideTheUser()){
    changeProfileUserName()
    renderLists()
    createListToOptions()
}

// updateInfoToLocalStorage()
getMatchUserDetail()
// make Show Home Page 
const lists = document.querySelectorAll('.list ');
lists.forEach(list => {
    list.classList.add("active")
});



if(typeof getAlbumFromStorage() === typeof albums && getAlbumFromStorage() != undefined){
    let html = ''
    const sectionsLibrary = document.querySelector(".sections-library")! as HTMLDivElement
    let index:number
    getAlbumFromStorage()!.forEach((album) =>{
            html += createNewList(album.name, album.name , "sections-library") as string
        sectionsLibrary.innerHTML = html 
        renderPhotoCard(album.photos ,album.name , "sections-library" )
    } )

}