function handleGetjokes() {
    try {
        fetch("/api/get-jokes")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var jokes = _a.jokes;
            try {
                if (!jokes)
                    throw new Error("didnt find jokes");
                console.log(jokes);
                displayJoke(jokes);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function displayJoke(jokes) {
    try {
        if (!jokes || jokes.length === 0)
            throw new Error("No jokes found");
        var randomIndex = Math.floor(Math.random() * jokes.length);
        var randomJoke = jokes[randomIndex];
        renderjokes(jokes);
    }
    catch (error) {
        console.error(error);
    }
}
function renderjokes(jokes) {
    try {
        if (!jokes || jokes.length === 0)
            throw new Error("No jokes found");
        var jokesElement = document.querySelector("#jokes");
        if (!jokesElement)
            throw new Error("Could not find jokes element on DOM");
        var randomIndex = Math.floor(Math.random() * jokes.length);
        var html = renderjoke(jokes[randomIndex]);
        jokesElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderjoke(joke) {
    try {
        return "<div class=\"jokeCard\">\n              <p contenteditable oninput=\"handlejokeNameUpdate(event,'" + joke.uid + "')\">" + joke.name + "</p>\n              <p contenteditable oninput=\"handlejokeNameUpdate(event,'" + joke.uid + "')\">" + joke.subtext + "</p>\n              <button onclick='handleDeletejoke(\"" + joke.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handlejokeNameUpdate(ev, uid) {
    try {
        var name = ev.target.textContent;
        var subtext = ev.target.textContent;
        fetch("/api/update-joke-name", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, subtext: subtext, uid: uid })
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddjoke(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var subtext = ev.target.elements.subtext.value;
        if (!name)
            throw new Error("No name");
        var newjoke = { name: name, subtext: subtext };
        fetch("/api/add-joke", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newjoke)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeletejoke(uid) {
    try {
        fetch("/api/delete-joke", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var jokes = _a.jokes;
            renderjokes(jokes);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
