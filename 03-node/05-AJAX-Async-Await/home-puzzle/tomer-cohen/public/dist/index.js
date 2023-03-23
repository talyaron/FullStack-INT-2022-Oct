var GetImage = document.querySelector("#GetImage");
if (GetImage) {
    //event driven coding
    GetImage.addEventListener("click", function () {
        try {
            var picOfDog_1 = document.querySelector("#picOfDog");
            if (!picOfDog_1)
                throw new Error("Couldnt find Pic Of Dog");
            console.log("get image");
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                try {
                    console.log(data);
                    var message = data.message;
                    var img = document.createElement("img");
                    img.src = message;
                    picOfDog_1.innerHTML = "";
                    picOfDog_1.appendChild(img);
                }
                catch (error) {
                    console.error(error);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
