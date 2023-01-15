//tesk 1
function addImage() {
    try {
        var picture = document.querySelector('#picture');
        console.dir(picture);
        var urlImage = prompt("Enter image please");
        if (picture && urlImage)
            for (var i = 0; i < 5; i++) {
                var img = document.createElement("img");
                img.src = urlImage;
                document.body.appendChild(img);
            }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
addImage();
console.log(addImage);
