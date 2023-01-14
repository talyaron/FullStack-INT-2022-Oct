function addImage() {
    try {
        var picture = document.querySelector('#picture');
        console.dir(picture);
        var urlImage = prompt("Enter image please");
        if (picture && urlImage)
            for (var i = 0; i < 5; i++) {
                picture.innerHTML = "<div class=\"imagebox\">\n        <img src='" + urlImage + "'/>\n        </div>";
            }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
addImage();
console.log(addImage);
