var Article = /** @class */ (function () {
    function Article(title, des, src) {
        this.title = title;
        this.des = des;
        this.src = src;
    }
    return Article;
}());
var articles = [];
// MODEL
window.onload = function () {
    try {
        getArticlesFromApi();
        console.log("page is fully loaded");
    }
    catch (error) {
        console.error(error);
    }
};
function checkLogin() {
    try {
        var data = localStorage.getItem("admin");
        if (!data)
            throw new Error("no found admin data in local storage");
        if (data == "true")
            return true;
        else
            return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function getArticlesFromApi() {
    try {
        fetch("/api/articles")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            renderArticle(data);
            articles = data;
        });
    }
    catch (error) {
        console.error(error);
    }
}
// VIEW
function renderArticle(articles) {
    try {
        var rootContainerNewNews = document.getElementById('rootContainerNewNews');
        if (!rootContainerNewNews)
            throw new Error("no found rootNewNew container Element");
        var html = articles.map(function (article) {
            return "\n        <div id='" + article.uuid + "' onclick=\"handleClickArticle('" + article.uuid + "') \" \n        style=\"background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(" + article.src + ")\"  \n        class=\"main-section__main__container-new-news__article active\">\n        \n        <h1 class=\"main-section__main__container-new-news__article__title\">\n        " + article.title + "\n        </h1>\n\n        <p class=\"main-section__main__container-new-news__article__subtitle\">\n        " + article.des + "\n        </p>\n\n        " + (checkLogin() ? renderAdminBtn(article.uuid) : '') + "\n\n        </div>\n        ";
        }).join('');
        rootContainerNewNews.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAdminBtn(uid) {
    try {
        var html = "\n        <div class=\"admin-buttons active\">\n        <button  class=\"admin-buttons__updateBTN\">\n            <i class=\"fa-solid fa-pen-to-square\"></i>\n        </button>\n        <button onclick=\"handelTrashClick('" + uid + "')\" class=\"admin-buttons__removeBTN\">\n            <i class=\"fa-solid fa-trash-can\" title=\"exit\"></i>\n        </button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// CONTROLLER Handles
function handleClickOnLogin() {
    try {
        window.open('/register.html');
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickArticle(uuid) {
    try {
        console.log(uuid);
    }
    catch (error) {
    }
}
function handleClickLogout() {
    try {
        localStorage.setItem('admin', "false");
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickSearchList() {
    var searchForm = document.getElementById('searchForm');
    searchForm.classList.toggle('active');
}
function handleChangeSearch(ev) {
    try {
        var rootContainerNewNews = document.querySelectorAll('.main-section__main__container-new-news__article h1');
        ev.preventDefault();
        rootContainerNewNews.forEach(function (e) {
            var valueInput = ev.target.value.toLowerCase();
            var contentValue = e.textContent.toLocaleLowerCase();
            var parent = e.parentElement;
            if (contentValue.includes(valueInput)) {
                makeArticleActive(parent);
            }
            if (ev.target.value.length === 0) {
                var articlesBox = document.querySelectorAll('.main-section__main__container-new-news__article');
                articlesBox.forEach(function (ele) {
                    ele.classList.add("active");
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function handelTrashClick(uuid) {
    try {
        try {
            if (!uuid)
                throw new Error("No UID");
            //send to server:
            fetch("/api/articles", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: uuid
                })
            })
                .then(function (res) {
                return res.json();
            })
                .then(function (data) { return console.log(data); })["catch"](function (error) {
                console.error(error);
            });
            getArticlesFromApi();
        }
        catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickAddArticle() {
    try {
        if (checkLogin()) {
            var addNewArticle = document.getElementById('addNewArticle');
            addNewArticle.classList.toggle('active');
        }
        else {
            alert("you must to be Admin");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmitFormAdd(ev) {
    try {
        ev.preventDefault();
        var title = ev.target.elements.title.value;
        var subtitle = ev.target.elements.subtitle.value;
        var src = ev.target.elements.src.value;
        fetch("/api/articles/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: title,
                des: subtitle,
                img: src
            })
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (data) { return console.log(data); })["catch"](function (error) {
            console.error(error);
        });
        var addNewArticle = document.getElementById('addNewArticle');
        addNewArticle.classList.remove('active');
        getArticlesFromApi();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
// control 
function makeArticleActive(element) {
    try {
        var rootContainerNewNews = document.querySelectorAll('.main-section__main__container-new-news__article');
        rootContainerNewNews.forEach(function (ele) {
            ele.classList.remove("active");
        });
        element.classList.add('active');
    }
    catch (error) {
        console.error(error);
    }
}
loginOn();
function loginOn() {
    try {
        var adminButtons = document.querySelectorAll('.admin-buttons');
        var loginContainer = document.querySelector('.main-section__header__nav-top__login');
        if (checkLogin()) {
            loginContainer.innerHTML = "\n                <img width=\"50px\" src=\"./images/adminOn.png\" >\n                <button onclick=\"handleClickLogout()\">\n                <i class=\"fa-solid fa-person-walking-arrow-right\"></i>\n                </button>\n                ";
        }
        else {
            loginContainer.innerHTML = "\n            <i class=\"fa-solid fa-user\"></i>\n            <span id=\"navToploginSpan\">Admin-login</span>\n\n            ";
        }
    }
    catch (error) {
        console.warn(error);
        var loginContainer = document.querySelector('.main-section__header__nav-top__login');
        loginContainer.innerHTML =
            "\n        <i class=\"fa-solid fa-user\"></i>\n        <span id=\"navToploginSpan\">Admin-login</span>\n\n        ";
    }
}
