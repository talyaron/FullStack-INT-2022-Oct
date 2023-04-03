function renderLatestArticle(articles) {
    try {
        var latestArticleRoot = document.querySelector("#latestArticleRoot");
        if (!latestArticleRoot)
            throw new Error("latest article not found");
        var article = articles[articles.length - 1];
        latestArticleRoot.innerHTML = "\n            <div id=\"latestArticleImageRoot\" class=\"main__latestArticle__image\">\n                <button id=\"editBtn\" class=\"main__latestArticle__edit\" onclick=\"handleEditArticle('" + article.uid + "')\">\n                    <i class=\"fa-solid fa-pen-to-square\"></i>\n                </button>\n                <button id=\"saveBtn\" class=\"main__latestArticle__save\" id=\"save-" + article.uid + "\" onclick=\"handleSaveArticle('" + article.uid + "')\">\n                    <i class=\"fa-solid fa-circle-check\"></i>\n                </button>\n            </div>\n            <h1 id=\"editTitle-" + article.uid + "\" contenteditable=\"false\">" + article.title + "</h1>\n            <p id=\"editParagraph-" + article.uid + "\" contenteditable=\"false\">" + article.paragraph + "</p>\n        ";
        var latestArticleImageRoot = document.querySelector("#latestArticleImageRoot");
        if (!latestArticleImageRoot)
            throw new Error("latest article image not found");
        latestArticleImageRoot.style.backgroundImage = "url(" + article.imageUrl + ")";
    }
    catch (error) {
        console.error(error);
    }
}
function renderSideArticles(articles) {
    try {
        var sideArticlesRoot = document.querySelector("#sideArticlesRoot");
        if (!sideArticlesRoot)
            throw new Error("side articles not found");
        var sideArticles = [articles[articles.length - 2], articles[articles.length - 3], articles[articles.length - 4]];
        var html = sideArticles.map(function (article) {
            return "\n            <div id=\"article-" + article.uid + "\" class=\"main__sideArticles__article\">\n                <button id=\"editBtn\" class=\"main__sideArticles__article__edit\" onclick=\"handleEditArticle('" + article.uid + "')\">\n                    <i class=\"fa-solid fa-pen-to-square\"></i>\n                </button>\n                <button id=\"saveBtn\" class=\"main__sideArticles__article__save\" id=\"save-" + article.uid + "\" onclick=\"handleSaveArticle('" + article.uid + "')\">\n                    <i class=\"fa-solid fa-circle-check\"></i>\n                </button>\n                <img class=\"main__sideArticles__article__image\" src=\"" + article.imageUrl + "\">\n                <div class=\"main__sideArticles__article__details\">\n                    <h1 id=\"editTitle-" + article.uid + "\" contenteditable=\"false\">" + article.title + "</h1>\n                    <p id=\"editParagraph-" + article.uid + "\" contenteditable=\"false\">" + article.paragraph + "</p>\n                </div>   \n            </div>     \n            ";
        }).join(" ");
        sideArticlesRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function toggleAdminLogin() {
    try {
        var adminLoginForm = document.querySelector(".navBar__sales__topic__login");
        if (!adminLoginForm)
            throw new Error("admin login root not found");
        if (!adminLoginForm.classList.contains('active')) {
            adminLoginForm.classList.toggle('active');
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddArticleForm() {
    try {
        var addArticleForm = document.querySelector(".addArticleForm");
        if (!addArticleForm)
            throw new Error("add Article Form not found");
        if (!addArticleForm.classList.contains("active"))
            addArticleForm.classList.toggle('active');
    }
    catch (error) {
        console.error(error);
    }
}
function renderEditBtns() {
    try {
        var _editBtns = document.querySelectorAll("#editBtn");
        if (!_editBtns)
            throw new Error("edit Btns were not found");
        var editBtns = Array.from(_editBtns);
        editBtns.map(function (button) {
            if (!button.classList.contains("active")) {
                button.classList.toggle('active');
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderSaveBtns() {
    try {
        var _saveBtns = document.querySelectorAll("#saveBtn");
        if (!_saveBtns)
            throw new Error("save Btns were not found");
        var saveBtns = Array.from(_saveBtns);
        saveBtns.map(function (button) {
            if (!button.classList.contains("active")) {
                button.classList.toggle('active');
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderlogoutBtn() {
    try {
        var adminLoginRoot = document.querySelector("#adminLoginRoot");
        if (!adminLoginRoot)
            throw new Error("admin login root not found");
        adminLoginRoot.innerHTML = "\n            <div id=\"adminLoginRoot\" class=\"navBar__sales__topic\" onclick=\"handleLogout()\">logout</div>\n        ";
    }
    catch (error) {
        console.error(error);
    }
}
