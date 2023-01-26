var userViewer = document.querySelector(".wrapper__userViewer");
var image = document.querySelector("#image");
var imgUrl = "";
if (image) {
    image.addEventListener("change", function () {
        var reader = new FileReader;
        reader.addEventListener("load", function () {
            imgUrl = reader.result;
        });
        reader.readAsDataURL(this.files[0]);
    });
}
