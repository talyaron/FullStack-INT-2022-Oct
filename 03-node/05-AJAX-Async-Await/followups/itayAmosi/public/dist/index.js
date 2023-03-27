var btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener('click', function () {
        try {
            var body_1 = document.querySelector("body");
            fetch("/random-colors") //promise
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
