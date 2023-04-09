function handleGetNews() {
    console.log("test");
    try {
        fetch("/api/get-news")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var news = _a.news;
            try {
                if (!news)
                    throw new Error("didnt find news");
                console.log(news);
                renderNews(news);
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
function renderNews(news) {
    try {
        if (!news)
            throw new Error("No news");
        var html = news.map(function (news) {
            return "<div class= \"newsCard\">\n        <img src =\"" + news.src + "\" alt =\"neus name is " + news.name + "\">\n       \n        <div>";
        })
            .join(' ');
        var newsElement = document.querySelector("#news");
        if (!newsElement)
            throw new Error("coundnt find user element on DOM");
        newsElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddNews(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        var newNews = { name: name, src: src };
        //send to server
        fetch("/api/add-news", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNews)
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
