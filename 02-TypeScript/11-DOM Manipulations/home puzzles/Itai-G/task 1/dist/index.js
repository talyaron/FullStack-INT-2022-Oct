var imageUrls = [];
for (var i = 0; i < 5; i++) {
    var imageUrl = prompt("Enter an image URL:");
    imageUrls.push("" + imageUrl);
}
var container = document.getElementById("container");
for (var i = 0; i < imageUrls.length; i++) {
    var img = document.createElement("img");
    img.src = imageUrls[i];
    container.appendChild(img);
}
