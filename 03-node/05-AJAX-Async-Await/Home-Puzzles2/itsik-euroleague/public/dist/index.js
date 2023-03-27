var imageClick = document.querySelectorAll(".main__container");
if (imageClick) {
    imageClick.forEach(function (img, index) {
        img.addEventListener("click", function () {
            getArticels(index);
        });
    });
}
function getArticels(index) {
    try {
        fetch("/articles")
            .then(function (res) { return res.json(); })
            .then;
    }
    catch (error) {
        console.error(error);
    }
}
