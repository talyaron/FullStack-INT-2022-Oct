// level 2
var imageUrlList = [];
for (var i = 0; i < 5; i++) {
    var getImage = prompt("Enter an image URL:");
    imageUrlList.push("" + getImage);
}
var wrapper = document.getElementById("wrapper");
for (var i = 0; i < imageUrlList.length; i++) {
    var img = document.createElement("img");
    img.src = imageUrlList[i];
    wrapper.appendChild(img);
}
