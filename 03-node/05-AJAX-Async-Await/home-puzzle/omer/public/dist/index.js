var btn = document.getElementById("btn");
var display = document.getElementById("display");
try {
    if (!btn || !display)
        throw new Error("Could not find elements");
    btn.addEventListener("click", function () {
        var html;
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            html = "\n            <img src=\"" + data.message + "\" alt=\"Dog\">\n            ";
            display.innerHTML = html;
        });
    });
}
catch (error) {
    console.error(error);
}
