// if The admin login function
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
// show Article display
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
function handelEditClick(uid) {
    try {
        var DataTitle = document.querySelector("#updateTitle-" + uid);
        var DataSubtitle = document.querySelector("#updateSubtitle-" + uid);
        var adminEditBtn = document.querySelector('.admin-buttons__updateBTN');
        if (adminEditBtn.innerHTML === " <i class=\"fa-regular fa-floppy-disk\"></i>") {
            if (!DataTitle)
                throw new Error("course Data Name not found");
            if (!DataSubtitle)
                throw new Error("course Data Price not found");
            adminEditBtn.innerHTML = "<i class=\"fa-solid fa-pen-to-square\"></i>";
            DataTitle.contentEditable = "false";
            DataSubtitle.contentEditable = "false";
            DataTitle.style.color = "white";
            DataSubtitle.style.color = "white";
            var newDataTitle = DataTitle.innerText;
            var newDataSubtitle = DataSubtitle.innerText;
            updateDataEditToServer(newDataTitle, newDataSubtitle, uid);
            getArticlesFromApi();
        }
        else {
            adminEditBtn.innerHTML = " <i class=\"fa-regular fa-floppy-disk\"></i>";
            if (!DataTitle)
                throw new Error("course Data Name not found");
            if (!DataSubtitle)
                throw new Error("course Data Price not found");
            DataTitle.contentEditable = "true";
            DataSubtitle.contentEditable = "true";
            DataTitle.style.color = "gray";
            DataSubtitle.style.color = "gray";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function updateDataEditToServer(title, subtitle, uid) {
    try {
        fetch("/api/articles/edit", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: title,
                des: subtitle,
                uuid: uid
            })
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (data) { return console.log(data); })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
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
