// import { error } from "console";
var form = document.querySelector("#addNewForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(event.target);
    var title = event.target.elements.title.value;
    var src = event.target.elements.src.value;
    var paragraph = event.target.elements.paragraph.value;
    if (!title || !src || !paragraph)
        throw new Error("error");
    var newArticle = {
        title: title,
        src: src,
        paragraph: paragraph
    };
    console.log(newArticle);
    fetch("/api/add-article", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    })
        .then(function (res) { return res.json(); })
        .then(function () {
        event.target.reset();
    })["catch"](function (error) {
        console.error(error);
    });
});
