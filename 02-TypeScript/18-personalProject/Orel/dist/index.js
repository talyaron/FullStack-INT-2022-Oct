var userLogInFromStorage = localStorage.getItem("userLogIn");
var usersOptionsBtn1 = document.querySelector('.users-options-after-login');
var usersOptionsBtn = document.querySelector('.users-options');
//Update Date From array TO LocalStorage
// updateInfoToLocalStorage()
if (lastUserIn) {
    //@ts-ignore
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
    changeProfileUserName();
    renderLists();
    createListToOptions();
}
// updateInfoToLocalStorage()
getMatchUserDetail();
// make Show Home Page 
var lists = document.querySelectorAll('.list ');
lists.forEach(function (list) {
    list.classList.add("active");
});
if (typeof getAlbumFromStorage() === typeof albums && getAlbumFromStorage() != undefined) {
    var html_1 = '';
    var sectionsLibrary_1 = document.querySelector(".sections-library");
    var index = void 0;
    getAlbumFromStorage().forEach(function (album) {
        html_1 += createNewList(album.name, album.name, "sections-library");
        sectionsLibrary_1.innerHTML = html_1;
        renderPhotoCard(album.photos, album.name, "sections-library");
    });
}
