//Controler
function getUrlFromUser() {
    try {
        var url = prompt("add picture url");
        if (!url || typeof url !== "string")
            throw new Error("no url found");
        pictures.push(new Picture(url));
    }
    catch (error) {
        console.error(error);
    }
}
function renderPictures(pictures) {
    try {
        var html_1 = "";
        pictures.forEach(function (picture) {
            html_1 += "<img src=\"" + picture.imgUrl + "\">";
        });
        console.log(html_1);
        var rootPictures = document.querySelector("#rootPictures");
        if (!rootPictures)
            throw new Error("couldnt find root element of pictures");
        rootPictures.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
