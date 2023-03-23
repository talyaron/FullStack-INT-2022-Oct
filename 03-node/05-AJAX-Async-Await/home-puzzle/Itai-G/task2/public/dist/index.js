var btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    try {
        var imageShower_1 = document.querySelector("#imageShower");
        if (!imageShower_1)
            throw new Error("Couldnt find picture");
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var message = data.message;
            var img = document.createElement("img");
            img.src = message;
            imageShower_1.innerHTML = "";
            imageShower_1.appendChild(img);
        });
    }
    catch (error) {
        console.error(Error);
    }
});
