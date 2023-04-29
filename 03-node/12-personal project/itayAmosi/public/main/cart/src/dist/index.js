function renderCartItems() {
    try {
        var html = "\n      <div class=\"shop-item\">\n          <span class=\"shop-item-title\">Album 1</span>\n          <img class=\"shop-item-image\" src=\"https://i.pinimg.com/originals/91/56/eb/9156ebee25665f298c941cdfbaa1a592.jpg\">\n          <div class=\"shop-item-details\">\n              <span class=\"shop-item-price\">$12.99</span>\n              <button class=\"btn btn-primary shop-item-button\" type=\"button\">ADD TO CART</button>\n              <button class=\"btn delete btn-primary shop-item-button\" type=\"button\">DELETE</button>\n          </div>\n      </div>\n";
        var cartItemsRoot = document.querySelector("#cartItems");
        if (!cartItemsRoot)
            throw new Error("cartItemsRoot not found");
        cartItemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
