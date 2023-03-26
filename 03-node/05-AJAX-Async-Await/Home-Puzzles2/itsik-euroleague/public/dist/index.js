var imageClick = document.querySelectorAll(".main__container same");
if (imageClick) {
    imageClick.forEach(function (img) {
        img.addEventListener("click", function () {
            console.log("asdasd");
        });
    });
}
