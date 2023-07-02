function renderBtn() {
    try {
      const html = `
      <div class="shop-items">
      <a href="./collections/index.html">
          <button class="btnMain shop-item">
              <span class="shop-item-title">Collections</span>
              <img class="shop-item-image" src="https://colourmeprettynails.com/wp-content/uploads/Heartbreak-01.jpg">
          </button>
      </a>
      <a href="./cart/index.html">
          <button class="shop-item">
              <span class="shop-item-title">Cart</span>
              <img class="shop-item-image" src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=">
          </button>
      </a>
  </div>
`;
      const mainBtnRoot = document.querySelector("#mainBtn");
      if (!mainBtnRoot) throw new Error("mainBtnRoot not found");
      mainBtnRoot.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }