
const userLogInFromStorage = localStorage.getItem("userLogIn") as string
const usersOptionsBtn1 = document.querySelector('.users-options-after-login')! as HTMLElement;
const usersOptionsBtn = document.querySelector('.users-options')! as HTMLElement;
//Update Date From array TO LocalStorage
// updateInfoToLocalStorage()



// of Login
if (userLogInFromStorage === "true") {
    if (!usersOptionsBtn || !usersOptionsBtn1) throw new Error("the button element not found")
    usersOptionsBtn.style.display = "none";
    usersOptionsBtn1.style.display = "flex";

} else {
    if (usersOptionsBtn || usersOptionsBtn1) {
        usersOptionsBtn1.style.display = "none";
        usersOptionsBtn.style.display = "block";
    }

}

function makeListActive() {
    const lists = document.querySelectorAll('.list ');
    lists.forEach(list => {
        list.classList.add("active")
    });
}


function renderPhotoLibrary() {
    if (!albums.length) return;
    albums.forEach(({ name, photos }) => {
        renderNewList(name, name, 'sections-library');
        const photoContainer = `${name}-photos`;
        renderPhotoCard(photos, photoContainer);
    })

}

function onInit() {
    openMenuLogoutBtn()
    renderPhotoCard(animals, "animalsList")
    renderPhotoCard(backgrounds, "backgroundList")
    if (insideTheUser()) {
        changeProfileUserName()
        renderLists()
        createListToOptions()
    }
    // updateInfoToLocalStorage()
    // make Show Home Page 
    makeListActive()
    renderPhotoLibrary()
    renderPhotoCard(getLikesPhotos(), "likeSongList");
}
