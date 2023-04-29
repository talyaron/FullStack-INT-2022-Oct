function renderitems() {
    try {
      const html = `
      <div class="tour-row">
      <button class="tour-item tour-date"><img src="https://ae05.alicdn.com/kf/H476423206d904678b82fb9f6e5362f74B/Middle-length-Coffin-Ombre-Pink-Acrylic-nails-crystal-DIY-Style-Art-Fake-nalis-Tips-Press-on.jpg" alt=""></button>
      <span class="tour-item tour-price">price</span>
      <span class="tour-item tour-name">name</span>
      <span class="tour-item tour-descriptions">descriptions</span>
      <button type="button" class="tour-item tour-btn btn btn-primary">Add to Favourites</button>
  </div>
`;
      const itemsRoot = document.querySelector("#items");
      if (!itemsRoot) throw new Error("itemsRoot not found");
      itemsRoot.innerHTML += html;
    } catch (error) {
      console.error(error);
    }
  }


  