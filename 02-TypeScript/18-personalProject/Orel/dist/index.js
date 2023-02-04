var userLogInFromStorage = localStorage.getItem("userLogIn");
var usersOptionsBtn1 = document.querySelector('.users-options-after-login');
var usersOptionsBtn = document.querySelector('.users-options');
//Update Date From array TO LocalStorage
// updateInfoToLocalStorage()
var usernameUser;
var emailUser;
if (lastUserIn) {
    usernameUser = lastUserIn.username;
    emailUser = lastUserIn.email;
}
// of Login
if (userLogInFromStorage === "true") {
    if (!usersOptionsBtn || !usersOptionsBtn1)
        throw new Error("the Btn element not found");
    usersOptionsBtn.style.display = "none";
    usersOptionsBtn1.style.display = "flex";
}
else {
    if (usersOptionsBtn || usersOptionsBtn1) {
        usersOptionsBtn1.style.display = "none";
        usersOptionsBtn.style.display = "block";
    }
}
// Logout BTN ON 
openMenuLogoutBtn();
renderPhotoCard(animals, "animalsList");
renderPhotoCard(animals, "animalsList");
renderPhotoCard(backgrounds, "backgroundList");
renderPhotoCard(backgrounds, "backgroundList");
// RENDER MAIN HOME PAGE PHOTOS
if (insideTheUser()) {
    // createNewList("karakoList" , "karako List" ,"sections-library")
    // renderPhotoCard(animals ,"karakoList" ,"sections-library")
    // createNewList("Jungle" , "Jungle" , "sections-library")
    // renderPhotoCard(backgrounds ,"Jungle" ,"sections-library")
    // render to HOME PAGE
    changeProfileUserName();
    renderLists();
}
// updateInfoToLocalStorage()
getMatchUserDetail();
// make Show Home Page 
var lists = document.querySelectorAll('.list ');
lists.forEach(function (list) {
    list.classList.add("active");
});
createListToOptions();
renderLists();
