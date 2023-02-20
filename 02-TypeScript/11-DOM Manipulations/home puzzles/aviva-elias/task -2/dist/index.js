var imag = document.querySelector(".imag");
var UsersPhoto = /** @class */ (function () {
    function UsersPhoto(PhotoAddress) {
        this.PhotoAddress = PhotoAddress;
    }
    return UsersPhoto;
}());
function pushToArrayPhoto() {
    try {
        var arrayPhoto = [];
        for (var i = 0; i < 5; i++) {
            var PhotoAddress = prompt("enter a photo address please");
            if (PhotoAddress && imag) {
                var userPhoto = new UsersPhoto(PhotoAddress);
                arrayPhoto.push(userPhoto);
                imag.innerHTML += "<img src='" + arrayPhoto[i].PhotoAddress + "'/>";
            }
            else {
                alert("you did not enter a photo address");
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
pushToArrayPhoto();
