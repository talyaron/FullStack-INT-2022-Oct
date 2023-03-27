var button = document.querySelector("#btn");
var images = document.querySelector("#image");
if (button) {
    button.addEventListener("click", function () {
        try {
            var result_1 = document.querySelector("#result");
            if (!result_1)
                throw new Error("Couldnt find element result");
            console.log("get image");
            fetch("/random-image")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var imageUrl = new URL(data.imageUrl, window.location.origin).href;
                // image.src = data.imageUrl;
                try {
                    console.log(data);
                    var imageUrl_1 = data.imageUrl;
                    // Image.src = const HTMLImge;
                    var Image = void 0;
                    result_1.innerText = imageUrl_1;
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
