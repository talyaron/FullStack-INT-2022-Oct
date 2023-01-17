var image = document.querySelector("#image");
function addPhoto() {
    try {
        var userPhoto = prompt("Enter your photo please");
        for (var i = 0; i < 5; i++) {
            if (userPhoto == "a" || image == null) {
                alert('you did not enter a Photo address');
                console.error("you did not enter a Photo address");
            }
            else {
                image.innerHTML += "<img src='" + userPhoto + "'/>";
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
addPhoto();
