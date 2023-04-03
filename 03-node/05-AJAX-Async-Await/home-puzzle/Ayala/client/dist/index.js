var button = document.querySelector("#btn");
var images = document.querySelector("#image");
if (button) {
    button.addEventListener("click", function () {
        try {
            var image = document.querySelector("#image");
            if (!image)
                throw new Error("Couldnt find element image");
            console.log("get image");
            fetch("/random-image")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                try {
                    console.log(data);
                    var imageUrl = data.imageUrl;
                    // image.src = imageUrl;
                    // image.innerText = imageUrl;
                }
                catch (error) {
                    console.error(error);
                }
            });
            console.log("end");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function setImageSrc(images, imageUrl) {
    throw new Error("Function not implemented.");
}
