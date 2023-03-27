var btn = document.querySelector("#btn");
var Joke = /** @class */ (function () {
    function Joke(titel, subtext) {
        this.titel = titel;
        this.subtext = subtext;
        this.uid = uuidv4();
    }
    return Joke;
}());
if (btn) {
    btn.addEventListener("click", function () {
        try {
            var body_1 = document.querySelector("body");
            fetch("/random-joke")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var randomjokes = data["randomjoke"];
                if (!randomjokes)
                    throw new Error("No random colors");
                if (!body_1)
                    throw new Error("No body");
                body_1.style.backgroundColor = "#" + randomjokes;
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
function uuidv4() {
    throw new Error("Function not implemented.");
}
function getRandomJokes() {
    var random = Math.floor(Math.random() * Jokes);
}
