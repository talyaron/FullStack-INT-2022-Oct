window.addEventListener('load', function () {
    console.log("Hello");
    try {
        getArticlesMain();
        getArticlesAdmin();
    }
    catch (error) {
        console.error(error);
    }
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
    getArticlesAdmin();
}
function getArticlesAdmin() {
    fetch('/all-articles')
        .then(function (response) { return response.json(); })
        .then(function (allArticles) {
        renderArticlesAdmin(allArticles, "displayAdmin");
    });
}
function getArticlesMain() {
    fetch('/all-articles')
        .then(function (response) { return response.json(); })
        .then(function (allArticles) {
        renderArticles(allArticles, "display");
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
                return "<div class=\"article\">\n                <h2>" + article.header + "</h2>\n                <h4>" + article.subject + "</h4>\n                <p>" + article.body + "</p>\n                <a href=\"#updateForm\"><button onclick=\"update('" + article.id + "')\">Update</button></a>\n                </div>";
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
                return "<div class=\"article\">\n                <h2>" + article.header + "</h2>\n                <h4>" + article.subject + "</h4>\n                <p>" + article.body + "</p>\n                </div>";
            })
                .join(" ");
            display.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function update(id) {
    try {
        fetch('/all-articles')
            .then(function (response) { return response.json(); })
            .then(function (allArticles) {
            var index = allArticles.findIndex(function (x) { return x.id === id; });
            var article = allArticles[index];
            if (!updateFormm)
                throw new Error("Could not find form");
            var html = "\n                <form onsubmit=\"updateForm(event, '" + id + "')\" id=\"updateForm\">\n                    <input type=\"text\" placeholder=\"" + article.header + "\" name=\"header\">\n                    <input type=\"text\" placeholder=\"" + article.subject + "\" name=\"subject\">\n                    <textarea name=\"body\" cols=\"30\" rows=\"5\" placeholder=\"" + article.body + "\"></textarea>\n                    <input type=\"submit\" value=\"Send\">\n                </form>\n                ";
            updateFormm.innerHTML = html;
        });
        getArticlesAdmin();
    }
    catch (error) {
        console.error(error);
    }
}
function updateForm(ev, id) {
    try {
        ev.preventDefault();
        console.log(ev);
        var header = ev.target.elements.header.value;
        if (!header)
            header = ev.target.elements.header.placeholder;
        var subject = ev.target.elements.subject.value;
        if (!subject)
            subject = ev.target.elements.subject.placeholder;
        var body = ev.target.elements.body.value;
        if (!body)
            body = ev.target.elements.body.placeholder;
        var article = new Article("", "", "");
        article.copyconstructor(header, subject, body, id);
        if (!updateFormm)
            throw new Error("Could not find form");
        fetch('/articles-update', {
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
        updateFormm.innerHTML = "";
        getArticlesAdmin();
    }
    catch (error) {
        console.error(error);
    }
}
