window.addEventListener('load', function () {
    console.log("Hello");
    getArticles();
});
function handleForm(ev) {
    ev.preventDefault();
    var header = ev.target.elements.header.value;
    var subject = ev.target.elements.subject.value;
    var body = ev.target.elements.body.value;
    ev.target.reset();
    var article = new Article(header, subject, body);
    fetch('/articles-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Success:", data);
    })["catch"](function (error) {
        console.error("Error:", error);
    });
    getArticles();
}
function getArticles() {
    fetch('/all-articles')
        .then(function (response) { return response.json(); })
        .then(function (allArticles) {
        renderArticles(allArticles, "display");
        renderArticlesAdmin(allArticles, "displayAdmin");
    });
}
function renderArticlesAdmin(articles, displayName) {
    try {
        var display = document.getElementById(displayName);
        if (!display)
            throw new Error("Display not found");
        if (!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        }
        else {
            var html = articles
                .map(function (article) {
                return "<div class=\"article\">\n                <h1>" + article.header + "</h1>\n                <h4>" + article.subject + "</h4>\n                <p>" + article.body + "</p>\n                <button onclick=\"remove('" + article.id + "')\">Remove</button>\n                </div>";
            })
                .join(" ");
            display.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderArticles(articles, displayName) {
    try {
        var display = document.getElementById(displayName);
        if (!display)
            throw new Error("Display not found");
        if (!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        }
        else {
            var html = articles
                .map(function (article) {
                return "<div class=\"article\">\n                <h1>" + article.header + "</h1>\n                <h4>" + article.subject + "</h4>\n                <p>" + article.body + "</p>\n                </div>";
            })
                .join(" ");
            display.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function remove(id) {
    try {
        fetch('/all-articles')
            .then(function (response) { return response.json(); })
            .then(function (allArticles) {
            var index = allArticles.findIndex(function (x) { return x.id === id; });
            if (index == -1)
                throw new Error("Can not find article");
            console.log(index);
            fetch('/articles-delete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(index)
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log("Success:", data);
            })["catch"](function (error) {
                console.error("Error:", error);
            });
        });
        getArticles();
    }
    catch (error) {
        console.error(error);
    }
}
