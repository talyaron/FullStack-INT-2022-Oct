function renderBtn() {
    try {
        var html = "\n      <div class=\"shop-items\">\n      <a href=\"./collections/index.html\">\n          <button class=\"btnMain shop-item\">\n              <span class=\"shop-item-title\">Collections</span>\n              <img class=\"shop-item-image\" src=\"https://colourmeprettynails.com/wp-content/uploads/Heartbreak-01.jpg\">\n          </button>\n      </a>\n      <a href=\"./cart/index.html\">\n          <button class=\"shop-item\">\n              <span class=\"shop-item-title\">Cart</span>\n              <img class=\"shop-item-image\" src=\"https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=\">\n          </button>\n      </a>\n  </div>\n";
        var mainBtnRoot = document.querySelector("#mainBtn");
        if (!mainBtnRoot)
            throw new Error("mainBtnRoot not found");
        mainBtnRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
