function NewPhotoCard(namePhoto, date, src, albumName) {
    try {
        var index = Number(localStorage.getItem("userIndex"));
        var patten = "\n        <div class=\"photo-card\">\n        <img src=\"" + src + "\" alt=\"\">\n        <h3>" + namePhoto + "</h3>\n        <p>" + users[index].username + "</p>\n        <small>" + date + "</small>\n        <button class=\"collapse-play\">\n        <i class=\"fa-solid fa-add\"></i>\n    </button>\n    </div>\n        ";
        // const findIndex  = albums.findIndex(album => album.name === albumName)
        // const photoArr = albums[findIndex].photos
        // photoArr.push(new Photos(namePhoto,date, src))
        albums.forEach(function (album) {
            var _a;
            if (album.name === albumName) {
                (_a = album.photos) === null || _a === void 0 ? void 0 : _a.push(new Photos("" + namePhoto, "" + date, "" + src));
            }
        });
        return patten;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// create New list
function createNewList(nameList, titleList, classNameContainer) {
    try {
        var sectionsHome = document.querySelector("." + classNameContainer);
        var patten = "\n        <div dataList=\"" + nameList + "\" class=\"list\">\n        <h4>" + titleList + "</h4>\n        <div class=\"recommended-list " + nameList + "\">\n        </div>\n    </div>\n        ";
        sectionsHome.innerHTML += patten;
        albums.push(new Albums(nameList, []));
        return patten;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
//Render All Cards On Dom
function renderPhotoCard(cards, containerClass, albumName) {
    var mainContainer = document.querySelector("." + containerClass);
    if (mainContainer === undefined)
        throw new Error('the Element not found');
    var AllCards = "";
    cards.forEach(function (photo) {
        AllCards += NewPhotoCard(photo.photoName, photo.date.toString(), photo.src);
    });
    mainContainer.innerHTML += AllCards;
    return AllCards;
}
function changeProfileUserName() {
    var nameProfile = document.querySelector('.user-box-profile h5');
    nameProfile.textContent = users[Number(localStorage.getItem("userIndex"))].username;
}
function renderLists() {
    try {
        var containerPlaylist = document.querySelector(".container-playlist");
        if (!containerPlaylist)
            throw new Error("the playlist container not exist");
        containerPlaylist.innerHTML = '';
        var html_1 = '';
        albums.forEach(function (album) {
            var tamp = "\n            <button onclick=\"handleClickLists(event)\" listName=\"" + album.name + "\" class=\"playlistBTN " + album.name + "\">\n            " + album.name + "\n            </button>";
            html_1 += tamp;
        });
        containerPlaylist.innerHTML += html_1;
        return html_1;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
