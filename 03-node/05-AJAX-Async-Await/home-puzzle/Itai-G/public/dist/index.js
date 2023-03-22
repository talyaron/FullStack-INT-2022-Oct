var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
function getImage() {
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    var selectedImage = imageArray[randomIndex];
    var imageShower = document.getElementById('imageShower');
    if (imageShower) {
        imageShower.src = "./imeges/" + selectedImage;
    }
}
