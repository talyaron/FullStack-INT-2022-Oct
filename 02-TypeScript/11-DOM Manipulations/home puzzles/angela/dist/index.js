var img = document.querySelector(".imgBox");
var addImg = [];
function addPrompt() {
    for (var a = 0; a < 5; a++) {
        var pr = prompt("enter an url");
        if (!pr || pr === null) {
            alert("please enter a vail url");
        }
        else {
            img === null || img === void 0 ? void 0 : img.innerHTML = "<div class=\"imgBox\">\n            <img src='" + pr + "'/>\n        </div>";
            var count = addImg.push(pr);
        }
    }
}
addPrompt();
console.log(addImg);
