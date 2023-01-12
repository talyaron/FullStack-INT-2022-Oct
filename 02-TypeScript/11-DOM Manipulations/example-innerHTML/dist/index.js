var title = document.querySelector("#title");
console.dir(title);
var userName = prompt("What is you name");
var imageUrl = prompt('Enter image url');
if (userName && title && imageUrl) {
    title.innerHTML = "<div class=\"card\">\n        <h1>This is " + userName + "'s site</h1>\n        <img src='" + imageUrl + "'/>\n        <p class=\"green\">This is the best site ever</p>\n    </div>";
}
