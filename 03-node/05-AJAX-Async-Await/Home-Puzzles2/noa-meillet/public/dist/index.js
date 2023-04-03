function handleGetNews() {
    try {
        fetch("/api/get-news")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var news = _a.news;
            try {
                if (!news)
                    throw new Error("didnt find news");
                console.log(news);
                rendernews(news);
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
function rendernews(news) {
    try {
        if (!news)
            throw new Error("No news");
        var html = news
            .map(function (news) {
            return "<div class=\"newsCard\">\n            <h3>" + news.heading + "</h3>\n            <p>" + news.content + "</p>\n            <img src=\"" + news.img + "\" alt=\"news image\">";
        })
            .join(" ");
        var newsElement = document.querySelector("#news");
        if (!newsElement)
            throw new Error("news element not found");
        newsElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddNew(ev) {
    try {
        ev.preventDefault();
        var heading = ev.target.elements.heading.value;
        var content = ev.target.elements.content.value;
        var img = ev.target.elements.img.value;
        if (!heading)
            throw new Error("No heading");
        if (!content)
            throw new Error("No content");
        if (!img)
            throw new Error("No image");
        var newNew = { heading: heading, content: content, img: img };
        //send to server:
        fetch("/api/add-news", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNew)
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
