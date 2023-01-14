var i = 5;
var count = 1;
var imageArr = [];
while (i > 0) {
    var imageUrl = prompt("Enter image URL " + count);
    if (imageUrl) {
        imageArr.push(imageUrl);
        i--;
        count++;
    }
}
var cards = document.querySelector(".cards");
for (var i_1 = 0; i_1 < imageArr.length; i_1++) {
    if (cards) {
        var card = document.createElement('div');
        card.className = 'cards__card';
        var h2 = document.createElement('h2');
        h2.innerText = "Picture " + (i_1 + 1);
        card.appendChild(h2);
        console.log("Card " + i_1);
        cards.appendChild(card);
        var img = document.createElement('img');
        img.setAttribute('src', "" + imageArr[i_1]);
        card.appendChild(img);
    }
}
//Photos URLs
//https://i.pinimg.com/originals/63/bd/3d/63bd3d308c09adf9298521746a228594.jpg
//https://images.unsplash.com/photo-1536536982624-06c1776e0ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBzY3JlZW4lMjBzYXZlcnxlbnwwfHwwfHw%3D&w=1000&q=80
//https://t4.ftcdn.net/jpg/03/42/22/21/360_F_342222107_e3nK2GiuXC9lgKXOxl6DQTZqAbxSKvVo.jpg
//https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701907192.jpg
//https://t3.ftcdn.net/jpg/02/88/85/40/360_F_288854085_UgTZlBB6cawdncsWnnHwMUnPthshtSKD.jpg
