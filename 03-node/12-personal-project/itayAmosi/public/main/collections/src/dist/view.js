"use strict";
exports.__esModule = true;
function renderCollections(collections) {
    try {
        var html = "\n      <div class=\"tour-row\">\n      <button class=\"tour-item tour-date\"><img src=\"https://ae05.alicdn.com/kf/H476423206d904678b82fb9f6e5362f74B/Middle-length-Coffin-Ombre-Pink-Acrylic-nails-crystal-DIY-Style-Art-Fake-nalis-Tips-Press-on.jpg\" alt=\"\"></button>\n      <span class=\"tour-item tour-price\">price</span>\n      <span class=\"tour-item tour-name\">name</span>\n      <span class=\"tour-item tour-descriptions\">descriptions</span>\n      <button type=\"button\" class=\"tour-item tour-btn btn btn-primary\">Add to Favourites</button>\n  </div>\n";
        var itemsRoot = document.querySelector("#items");
        if (!itemsRoot)
            throw new Error("itemsRoot not found");
        itemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
