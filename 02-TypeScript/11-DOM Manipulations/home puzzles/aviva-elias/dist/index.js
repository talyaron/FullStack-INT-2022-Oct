var imag = document.querySelector(".imag");
var photoContainer = [];
function addPhoto() {
    try {
        for (var i = 0; i < 5; i++) {
            var userPhoto = prompt("Enter your photo please");
            if (userPhoto == null || imag == null) {
                alert('you did not enter a Photo address');
                return new Error('you did not enter a Photo address');
            }
            else {
                imag.innerHTML = "<img src='" + userPhoto + "'/>";
                photoContainer.push(userPhoto);
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
// addPhoto()
