function handleGetJokes() {
    console.log("test");
    try {
        fetch("/api/get-jokes")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var jokes = _a.jokes;
            try {
                if (!jokes)
                    throw new Error("didnt find jokes");
                console.log(jokes);
                renderJokes(jokes);
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
function renderJokes(jokes) {
    try {
        if (!jokes)
            throw new Error("No jokes");
        var html = jokes
            .map(function (joke) {
            return renderJoke(joke);
        })
            .join(" ");
        var jokesElement = document.querySelector("#jokes");
        if (!jokesElement)
            throw new Error("coundnt find jokes element on DOM");
        jokesElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderJoke(joke) {
    try {
        return "<div class=\"userCard\">\n              <p contenteditable oninput=\"handleJokeUpdate(event, '" + joke.uid + "')\">" + joke.content + "</p>\n              <button onclick='handleDeleteJoke(\"" + joke.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handleJokeUpdate(ev, uid) {
    try {
        console.log(uid);
        var content = ev.target.textContent;
        fetch("/api/update-content", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: content, uid: uid })
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddJoke(ev) {
    try {
        ev.preventDefault();
        var content = ev.target.elements.content.value;
        if (!content)
            throw new Error("No content");
        var newJoke = { content: content };
        //send to server:
        fetch("/api/add-joke", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJoke)
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
function handleDeleteJoke(uid) {
    try {
        console.log(uid);
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
            renderJoke(jokes);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
