function renderCartItems() {
    try {
      const html = `
      <div class="shop-item">
          <span class="shop-item-title">Album 1</span>
          <img class="shop-item-image" src="https://i.pinimg.com/originals/91/56/eb/9156ebee25665f298c941cdfbaa1a592.jpg">
          <div class="shop-item-details">
              <span class="shop-item-price">$12.99</span>
              <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
              <button class="btn delete btn-primary shop-item-button" type="button">DELETE</button>
          </div>
      </div>
`;
      const cartItemsRoot = document.querySelector("#cartItems");
      if (!cartItemsRoot) throw new Error("cartItemsRoot not found");
      cartItemsRoot.innerHTML += html;
    } catch (error) {
      console.error(error);
    }
  }
