function delayStartTree() {
    var containerTree = document.querySelector(".home-container__container-img");
    containerTree.style.opacity = "0";
    setTimeout(function () {
        containerTree.style.opacity = "1";
    }, 3000);
}
function displayAnimationOnStart() {
    try {
        var treeContainer_1 = document.querySelector('.loading-ani');
        setTimeout(function () {
            treeContainer_1.classList.remove('active');
        }, 1500);
    }
    catch (error) {
        console.error(error);
    }
}
// function handleJoinNow() {
// }
function animateListMenu() {
    var list = document.querySelectorAll('.home-container__nav-list');
    list.forEach(function (l, i) {
        var li = l;
        if (i === 0) {
            setTimeout(function () {
                li.style.visibility = "visible";
            }, 1500);
        }
        else if (i === 1) {
            setTimeout(function () {
                li.style.visibility = "visible";
            }, 2500);
        }
        else if (i === 2) {
            setTimeout(function () {
                li.style.visibility = "visible";
            }, 3500);
        }
        else if (i === 3) {
            setTimeout(function () {
                li.style.visibility = "visible";
            }, 4500);
        }
    });
}
function handleClickDesign() {
    var html = "   \n        <span class=\"design-name\">Orel Karako</span> <p> Website Designer </p>\n    <span class=\"design-name\">Yoram Carmeli</span> <p> Website Engine </p>\n    <span class=\"design-name\">Tal Course</span> <p> SuperMan Programmer </p>\n    ";
    var containerIMG = document.querySelector('.home-container__container-img');
    containerIMG.style.top = "40%";
    fillDivInElements("desMenuRoot", html);
    renderMenuContainer("DESIGNERS");
}
function handleClickProjects() {
    var containerIMG = document.querySelector('.home-container__container-img');
    var desMenu = document.querySelector('.container-desMenu');
    containerIMG.style.top = "20%";
    var html = "   \n    <div class=\"container-img\" >\n    <div  id=\"projects\">\n        <img width=\"250px\" src=\"./img/project/project1.png\" alt=\"\">\n        <caption>ProList Web Lists Images</caption>\n    </div>   \n    <div  id=\"projects\">\n    <img width=\"250px\" src=\"./img/project/project2.png\" alt=\"\">\n    <caption>Balloons pop Game to 2023 new Years</caption>\n</div>   \n<div  id=\"projects\">\n<a href=\"/project1.html\"> \n\n<img width=\"250px\" src=\"./img/project/project1.png\" alt=\"\">\n</a>\n<caption>ProList Web Lists Images</caption>\n</div>   \n    </div>\n\n";
    fillDivInElements("desMenuRoot", html);
    renderMenuContainer("PROJECTS");
}
function handleClickSkills() {
    var imgDiv = document.querySelector('.home-container__container-img-desMenu');
    imgDiv.style.width = "950px";
    var html = "   \n    <dl>\n    <dt>\n      Browser market share June 2015\n    </dt>\n    <dd class=\"percentage percentage-95\"><span class=\"text\">HTML5 : 95%</span></dd>\n    <dd class=\"percentage percentage-80\"><span class=\"text\">CSS5 : 80%</span></dd>\n    <dd class=\"percentage percentage-70\"><span class=\"text\">TypeScript: 70%</span></dd>\n    <dd class=\"percentage percentage-10\"><span class=\"text\">NodeJs: 10%</span></dd>\n\n  </dl>\n\n";
    fillDivInElements("desMenuRoot", html);
    renderMenuContainer("GALLERY");
}
function handleClickMore() {
    var html = "   \n    \n";
    fillDivInElements("desMenuRoot", html);
    renderMenuContainer("MORE");
}
function renderMenuContainer(titles) {
    var imgDiv = document.querySelector('.home-container__container-img-desMenu');
    var title = imgDiv.querySelector('h1');
    var container = imgDiv.querySelector('.container-desMenu');
    imgDiv.style.display = "block";
    setTimeout(function () {
        imgDiv.style.minHeight = "30vh";
        imgDiv.style.height = "auto";
    }, 2000);
    title.innerText = titles;
}
function fillDivInElements(IDrootContainer, html) {
    var root = document.getElementById(IDrootContainer);
    root.innerHTML = html;
}
animateListMenu();
displayAnimationOnStart();
delayStartTree();
