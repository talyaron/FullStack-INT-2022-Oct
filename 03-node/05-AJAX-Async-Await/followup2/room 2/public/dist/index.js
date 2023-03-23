function handleGetBots() {
    try {
        fetch("/api/get-bots")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var bots = _a.bots;
            try {
                if (!bots)
                    throw new Error("didnt find bots");
                console.log(bots);
                renderBots(bots);
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
function renderBots(bots) {
    try {
        if (!bots)
            throw new Error("No Bots");
        var html = bots
            .map(function (bot) {
            return "<div class=\"botsCard\">\n            <h3>" + bot.name + "</h3>\n            <img src=\"" + bot.img + "\" alt=\"bots image\">";
        })
            .join(" ");
        var botsElement = document.querySelector("#bots");
        if (!botsElement)
            throw new Error("bots element not found");
        botsElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddBot(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var img = ev.target.elements.img.value;
        if (!name)
            throw new Error("No name");
        if (!img)
            throw new Error("No image");
        var newBot = { name: name, img: img };
        //send to server:
        fetch("/api/add-bot", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBot)
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
