var btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener("click", function () {
        try {
            var imgElement_1 = document.querySelector("#dogImg");
            if (!imgElement_1)
                throw new Error("Couldnt find element result");
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                try {
                    console.log(data);
                    var message = data.message;
                    if (!message)
                        throw new Error("Couldnt get number from server");
                    imgElement_1.setAttribute("src", "" + message);
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
