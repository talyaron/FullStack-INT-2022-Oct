var userLogInFromStorage = localStorage.getItem("userLogIn");
var usersOptionsBtn1 = document.querySelector('.users-options-after-login');
var usersOptionsBtn = document.querySelector('.users-options');
//Update Date From array TO LocalStorage
// updateInfoToLocalStorage()
// of Login
if (userLogInFromStorage === "true") {
    if (!usersOptionsBtn || !usersOptionsBtn1)
        throw new Error("the button element not found");
    usersOptionsBtn.style.display = "none";
    usersOptionsBtn1.style.display = "flex";
}
else {
    if (usersOptionsBtn || usersOptionsBtn1) {
        usersOptionsBtn1.style.display = "none";
        usersOptionsBtn.style.display = "block";
    }
}
function makeListActive() {
    var lists = document.querySelectorAll('.list ');
    lists.forEach(function (list) {
        list.classList.add("active");
    });
}
function renderPhotoLibrary() {
    if (!albums.length)
        return;
    albums.forEach(function (_a) {
        var name = _a.name, photos = _a.photos;
        renderNewList(name, name, 'sections-library');
        var photoContainer = name + "-photos";
        renderPhotoCard(photos, photoContainer);
    });
}
function onInit() {
    if (insideTheUser()) {
        renderLists();
        openMenuLogoutBtn();
        renderPhotoCard(animals, "animalsList");
        renderPhotoCard(backgrounds, "backgroundList");
        changeProfileUserName();
        createListToOptions();
    }
    // updateInfoToLocalStorage()
    // make Show Home Page 
    makeListActive();
    renderPhotoLibrary();
    renderPhotoCard(getLikesPhotos(), "likeSongList");
}
