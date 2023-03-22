var btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener("click", function () {
        try {
            var body_1 = document.querySelector("body");
            fetch("/random-colors")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var randomColors = data["randomColors"];
                console.log(randomColors);
                if (!randomColors)
                    throw new Error("No random colors");
                if (!body_1)
                    throw new Error("No body");
                body_1.style.backgroundColor = "#" + randomColors;
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
var imageArray = ["1.jpeg", "2.jpeg", "3.jpeg"];
function get_random_image() {
    var random_index = Math.floor(Math.random() * imageArray.length);
    var selected_image = imageArray[random_index];
    var image_shower = document.getElementById('image_shower');
    if (image_shower) {
        image_shower.src = "./imeges/" + selected_image;
    }
}
