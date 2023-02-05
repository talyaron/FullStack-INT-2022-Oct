// 
//USERS LOCAL STORAGE
function createListToOptions() {
    try {
        // sent data list to options
        var selectList_1 = document.getElementById('selectList');
        selectList_1.innerHTML = '';
        albums.forEach(function (album) {
            selectList_1.innerHTML += "<option value=\"" + album.name + "\">" + album.name + "</option>";
            console.log(album.name);
        });
    }
    catch (error) {
        console.error(error);
    }
}
//------------------------------------ USERS SETTING
function checkMatchUserDetails(emailUser, passwordUser) {
    try {
        if (!users)
            throw new Error("the users no exist");
        var userIndex = users.findIndex(function (user) { return emailUser.toLowerCase() === user.email.toLowerCase() && passwordUser === user.password; });
        if (userIndex === -1)
            return false;
        else {
            localStorage.setItem("userIndex", userIndex.toString());
            return true;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function checksIfUserExists(emailUser) {
    try {
        var userCur = users.find(function (user) { return user.email === emailUser; });
        if (!userCur)
            return false;
        else {
            return true;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function openMenuLogoutBtn() {
    try {
        var collapseUserLogout_1 = document.querySelector(".user-box-profile-collapse");
        var collapseUserLogoutIcon_1 = document.querySelector(".user-box-profile i");
        var userBoxProfileClick = document.querySelector('.user-box-profile ');
        ;
        userBoxProfileClick === null || userBoxProfileClick === void 0 ? void 0 : userBoxProfileClick.addEventListener('click', function (e) {
            collapseUserLogout_1.classList.toggle('active');
            if (collapseUserLogout_1.classList.contains('active')) {
                collapseUserLogoutIcon_1.style.rotate = '180deg';
            }
            else {
                collapseUserLogoutIcon_1.style.rotate = '0deg';
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function logout() {
    try {
        localStorage.setItem("userLogIn", "false");
    }
    catch (error) {
        console.error(error);
    }
}
function insideTheUser() {
    try {
        if (localStorage.getItem("userLogIn") === "true") {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
//---------------------------- LOGIN-/-Sign-Up--Pages
// LOg in function
function handleSubmitSignIn(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, email = _a.email, password = _a.password, username = _a.username, gender = _a.gender;
        var errorMsgEmailInput = document.getElementById('errorMsgEmailInput');
        var errorMsgPasswordInput = document.getElementById('errorMsgPasswordInput');
        if (checksIfUserExists(email.value)) {
            errorMsgEmailInput.innerText = "This Email Exist in The System";
            errorMsgEmailInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInput.parentElement.classList.remove("empty");
        }
        if (email.value == '') {
            errorMsgEmailInput.innerText = "Please enter your ProList username or email address.";
            errorMsgEmailInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInput.parentElement.classList.remove("empty");
        }
        if (password.value == '') {
            errorMsgPasswordInput.innerText = "Please enter your password.";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else if (password.value.length <= 5) {
            errorMsgPasswordInput.innerText = "Password Must to be with 5 letter or more";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else if (password.value.length <= 5) {
            errorMsgPasswordInput.innerText = "Password Must to be with 5 letter or more";
            errorMsgPasswordInput.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgPasswordInput.parentElement.classList.remove("empty");
        }
        users.push(new Users(email.value, password.value, username.value, gender.value, false));
        updateUsersToLocalStorage();
        ev.target.reset();
        return location.href = './login.html';
    }
    catch (error) {
        console.error(error);
    }
}
// Sign IN function
function handleSubmitLogIn(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, emailLogin = _a.emailLogin, passwordLogin = _a.passwordLogin;
        var errorMsgEmailInputLog = document.getElementById('errorMsgEmailInputLOG');
        var errorMsgPasswordInputLog = document.getElementById('errorMsgPasswordInputLOG');
        if (emailLogin.value == '') {
            errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address.";
            errorMsgEmailInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInputLog.parentElement.classList.remove("empty");
        }
        if (passwordLogin.value == '') {
            errorMsgPasswordInputLog.innerText = "Please enter your password.";
            errorMsgPasswordInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgPasswordInputLog.parentElement.classList.remove("empty");
        }
        // אם יש התאמה תעשה משהו
        console.log(checkMatchUserDetails(emailLogin.value, passwordLogin.value));
        console.log(emailLogin.value, passwordLogin.value);
        if (checkMatchUserDetails(emailLogin.value, passwordLogin.value)) {
            ifRefresh();
            ev.target.reset();
            return location.href = './index.html';
        }
        else {
            var textWarning = document.getElementById('pNotLoginSucc');
            textWarning.innerHTML =
                "\n             <i class=\"fa-solid fa-triangle-exclamation\"></i>\n              The email or password not match!\n              ";
            textWarning.style.color = "red";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickLogOut() {
    try {
        logout();
        location.reload();
    }
    catch (error) {
        console.log(error);
    }
}
//---------------------------Handle Click Function List Left-----------------
//home
function handleClickHomeList(ev) {
    try {
        var sectionsHome = document.querySelector('.sections-home');
        var lists = document.querySelectorAll('.list ');
        makeSectionsActive(sectionsHome);
        lists.forEach(function (list) {
            list.classList.add("active");
        });
    }
    catch (error) {
        console.log(error);
    }
}
//search
function handleClickSearchList(ev) {
    try {
        var sectionsSearch = document.querySelector('.sections-search');
        makeSectionsActive(sectionsSearch);
    }
    catch (error) {
        console.log(error);
    }
}
//library
function handleClickLibraryList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsLibrary = document.querySelector('.sections-library');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            makeSectionsActive(sectionsLibrary);
        }
    }
    catch (error) {
        console.log(error);
    }
}
//Create Album
function handleClickCreateAlbumList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsCreateAlbum = document.querySelector('.sections-create-album');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            makeSectionsActive(sectionsCreateAlbum);
            createListToOptions();
        }
    }
    catch (error) {
        console.log(error);
    }
}
//Liked Song
function handleClickLikedPhotosList(ev) {
    try {
        if (!insideTheUser()) {
            alert("you must to login to enter Library");
        }
        else {
            var sectionsLikedPhotos = document.getElementById('likedSongSection');
            var lists = document.querySelectorAll('.list ');
            lists.forEach(function (list) {
                list.classList.add("active");
            });
            sectionsLikedPhotos.classList.add("active");
            makeSectionsActive(sectionsLikedPhotos);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleClickLists(ev) {
    try {
        var sectionsHome = document.querySelectorAll('.sections-home div');
        if (!sectionsHome)
            throw new Error("section Home Divs not exist");
        sectionsHome.forEach(function (e) {
            e.classList.remove("active");
            if ((e.getAttribute("datalist") !== null) && e.getAttribute("datalist") === ev.target.textContent) {
                var element = e;
                element.classList.add("active");
            }
            console.log();
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddToLike(ev) {
    var albumName = ev.target.parentElement.parentElement.parentElement.querySelector('h4').innerText;
    var photoTitle = ev.target.parentElement.querySelector('h3').textContent;
    var btnLike = ev.target.parentElement.querySelector('button');
    console.log(albumName);
    var currPhoto;
    var isDefaultAlbum = ['Backgrounds', 'Animals'].includes(albumName);
    if (isDefaultAlbum) {
        var albumSelected = albumName === 'Animals' ? animals : backgrounds;
        currPhoto = albumSelected.find(function (photo) { return photo.photoName === photoTitle; });
    }
    else {
        var currAlbum = albums.find(function (album) { return album.name === albumName; });
        currPhoto = currAlbum.photos.find(function (photo) { return photo.photoName === photoTitle; });
    }
    currPhoto.like = !currPhoto.like;
    if (currPhoto.like) {
        btnLike.style.color = "red";
    }
    else {
        btnLike.style.color = "black";
    }
    if (!isDefaultAlbum)
        updatePhotosToLocalStorage();
    else if (albumName === 'Animals')
        saveAnimalsToStorage();
    else if (albumName === 'Background')
        saveBackgroundToStorage();
    renderPhotoCard(getLikesPhotos(), "likeSongList");
}
//----------------------Handle Submit Function left List-----------------
function handleSubmitCreateAlbumsList(ev) {
    try {
        ev.preventDefault();
        var nameListValue = ev.target.elements.createListName.value.toString();
        console.log(nameListValue);
        createNewList(nameListValue, nameListValue, "sections-library");
        createListToOptions();
        ev.target.reset();
    }
    catch (error) {
        console.log(error);
    }
}
function handleSubmitCreatePhoto(ev) {
    try {
        ev.preventDefault();
        var albumName_1 = ev.target.elements.selectList.value;
        var photoName = ev.target.elements.photoNameCreateImage.value;
        var date = ev.target.elements.photoDateCreateImage.value;
        var src = ev.target.elements.photoSrcCreateImage.value;
        var dateMounts = date.slice(5, date.length);
        var dateYear = date.slice(0, 5);
        var newDate = "< -- " + dateMounts + "-" + dateYear + " -- >";
        var currAlbum = albums.find(function (album) { return album.name === albumName_1; });
        var albumPhotos = currAlbum.photos;
        // make new Photo
        albumPhotos.push(new Photos(photoName, newDate, src));
        updatePhotosToLocalStorage();
        var photoContainer = albumName_1 + "-photos";
        renderPhotoCard(albumPhotos, photoContainer);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
