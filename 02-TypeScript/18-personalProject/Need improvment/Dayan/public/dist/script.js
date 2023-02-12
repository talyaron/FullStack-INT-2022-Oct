//-----Toggle SideMenu-----//
var navBar = document.querySelector("nav");
var myNav = document.getElementById("nav-bar");
var navLinks = myNav.querySelectorAll("li");
var hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", function () {
    myNav.classList.toggle("active"); //פתיחת תפריט בכל לחיצה על ההמבורגר
    hamMenu.classList.toggle("fa-times"); //הופך את האייקון של ההמבורגר לאיקס לאחר הקליק
});
navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
        myNav.classList.remove("active"); //בכל לחיצה על אחד מכפתורי התפריט, התפריט נעלם
        hamMenu.classList.toggle("fa-times"); //לחיצה על אחד מלחצני התפריט ישנה את האייקון את האיקס בחזרה לאייקון של ההמבורגר
    });
});
//-----Scroll to top button-----//
var scrollTopButton = document.getElementById("scroll-top-btn");
scrollTopButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});
//-----Gallery Script-----//
var galleryConteiner = document.querySelector(".gallery-container");
for (var i = 0; i < gallery.length; i++) {
    var img = document.createElement("img");
    img.src = gallery[i].src;
    galleryConteiner.appendChild(img);
}
