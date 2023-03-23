var button = document.querySelector("#btn");
if (button) {
    button.addEventListener("click", function () {
        try {
            console.log('test');
            var result_1 = document.querySelector('#result');
            if (!result_1)
                throw new Error("couldnt find result");
            fetch("/randomPicture")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log(data);
                result_1.innerHTML = "<img src=" + data + " alt=\"\">";
            });
        }
        catch (error) {
            console.error(Error);
        }
    });
}
