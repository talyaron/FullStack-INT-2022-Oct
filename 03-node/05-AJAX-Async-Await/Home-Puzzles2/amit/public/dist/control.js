function handleGetArticles() {
    try {
        fetch("/api/articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                if (!articles)
                    throw new Error("articles not found");
                if (articles.length === 0)
                    throw new Error("articles is empty");
                console.log("articles", articles);
                renderLatestArticle(articles);
                renderSideArticles(articles);
                var adminLoginButton = document.querySelector("#adminLoginRoot");
                if (!adminLoginButton)
                    throw new Error("admin Login Button Root not found");
                if (adminLoginButton.innerText === "logout") {
                    renderEditBtns();
                    renderSaveBtns();
                }
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
function handleAdminLogin(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name entered");
        if (!password)
            throw new Error("No password entered");
        var activeAdmin = { name: name, password: password };
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activeAdmin)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        if (name === "amit" && password === "123") {
            renderAddArticleForm();
            renderEditBtns();
            renderSaveBtns();
            renderlogoutBtn();
            toggleAdminLogin();
        }
        else {
            alert("incorrect password or user name");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddArticle(ev) {
    try {
        ev.preventDefault();
        var title = ev.target.elements.title.value;
        var paragraph = ev.target.elements.paragraph.value;
        var imageUrl = ev.target.elements.imageUrl.value;
        if (!title)
            throw new Error("no title");
        if (!paragraph)
            throw new Error("no paragraph");
        if (!imageUrl)
            throw new Error("no imageUrl");
        var article = new Article(title, paragraph, imageUrl);
        fetch("/api/articles", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        handleGetArticles();
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditArticle(uid) {
    try {
        fetch("/api/articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                if (!articles)
                    throw new Error("articles not found");
                if (articles.length === 0)
                    throw new Error("articles is empty");
                var article = articles.find(function (article) { return article.uid === uid; });
                if (!article)
                    throw new Error("article not found");
                var articleTitle = document.querySelector("#editTitle-" + article.uid);
                var articleParagraph = document.querySelector("#editParagraph-" + article.uid);
                if (!articleTitle)
                    throw new Error("article title not found");
                if (!articleParagraph)
                    throw new Error("article paragraph not found");
                articleTitle.contentEditable = "true";
                articleParagraph.contentEditable = "true";
                articleTitle.style.color = "blue";
                articleParagraph.style.color = "blue";
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
function handleSaveArticle(uid) {
    try {
        fetch("/api/articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                if (!articles)
                    throw new Error("articles not found");
                if (articles.length === 0)
                    throw new Error("articles is empty");
                var article = articles.find(function (article) { return article.uid === uid; });
                if (!article)
                    throw new Error("article not found");
                var articleTitle = document.querySelector("#editTitle-" + article.uid);
                var articleParagraph = document.querySelector("#editParagraph-" + article.uid);
                if (!articleTitle)
                    throw new Error("article title not found");
                if (!articleParagraph)
                    throw new Error("article paragraph not found");
                articleTitle.contentEditable = "false";
                articleParagraph.contentEditable = "false";
                articleTitle.style.color = "black";
                articleParagraph.style.color = "black";
                article.title = articleTitle.innerText;
                article.paragraph = articleParagraph.innerText;
                fetch("/api/articles/" + uid, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(article)
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
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogout() {
    try {
        var addArticleForm = document.querySelector(".addArticleForm");
        if (!addArticleForm)
            throw new Error("add Article Form not found");
        addArticleForm.classList.toggle('active');
        var adminLoginButton = document.querySelector("#adminLoginRoot");
        if (!adminLoginButton)
            throw new Error("admin Login Button Root not found");
        adminLoginButton.innerText = "Admin log In";
        toggleAdminLogin();
        handleGetArticles();
    }
    catch (error) {
        console.error(error);
    }
}
