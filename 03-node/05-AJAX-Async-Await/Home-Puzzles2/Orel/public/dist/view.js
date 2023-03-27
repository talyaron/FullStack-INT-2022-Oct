// VIEW
function renderArticle(articles) {
    try {
        var rootContainerNewNews = document.getElementById('rootContainerNewNews');
        if (!rootContainerNewNews)
            throw new Error("no found rootNewNew container Element");
        var html = articles.map(function (article) {
            return "\n        <div title=\"" + article.title.split(' ').splice(1, 3).join(' ') + "\" id='" + article.uuid + "' ondblclick=\"handleClickArticle('" + article.uuid + "') \" \n        style=\"background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(" + article.src + ")\"  \n        class=\"main-section__main__container-new-news__article active \">\n        \n        <h1 id='updateTitle-" + article.uuid + "' class=\"main-section__main__container-new-news__article__title\">\n        " + article.title + "\n        </h1>\n\n        <p id='updateSubtitle-" + article.uuid + "' class=\"main-section__main__container-new-news__article__subtitle\">\n        " + article.des + "\n        </p>\n\n        " + (checkLogin() ? renderAdminBtn(article.uuid) : '') + "\n\n        </div>\n        ";
        }).join('');
        rootContainerNewNews.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAdminBtn(uid) {
    try {
        var html = "\n        <div class=\"admin-buttons active\">\n        <button  class=\"admin-buttons__updateBTN\" onclick=\"handelEditClick('" + uid + "')\">\n            <i class=\"fa-solid fa-pen-to-square\"></i>\n        </button>\n        <button onclick=\"handelTrashClick('" + uid + "')\" class=\"admin-buttons__removeBTN\">\n            <i class=\"fa-solid fa-trash-can\" title=\"exit\"></i>\n        </button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
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
