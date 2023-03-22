var imageArray = ["1.jpeg", "2.jpeg", "3.jpeg"];
function get_random_image() {
    var random_index = Math.floor(Math.random() * imageArray.length);
    var selected_image = imageArray[random_index];
    var image_shower = document.getElementById('image_shower');
    if (image_shower) {
        image_shower.src = "./imeges/" + selected_image;
    }
}
