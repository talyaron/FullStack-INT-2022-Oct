const rootItems = document.querySelector("#rootItems")



function handleAddItem(ev: any) {
    try {
      ev.preventDefault();
  
      console.log(ev);
      const name = ev.target.elements.name.value;

      items.push(new Item(name));
      localStorage.setItem('items',JSON.stringify(items));
      console.log(items);
      ev.target.reset();
  
      console.log(name);
      if (!rootItems) throw new Error("rootItems is null");
      renderItems(items, "rootItems");
    } catch (error) {
      console.error(error);
    }
  }


  function renderItems(items: Item[], renderElementId: string): void {
    try {
      if (!items || !Array.isArray(items))
        throw new Error("items is not an array");
      const html = items
        .map((item) => {
          return `
      <div class="item">
        <h3>${item.name}</h3>
      </div>
      `;
        })
        .join(" ");
      console.log(html);
      const element = document.querySelector(`#${renderElementId}`);
      if (!element) throw new Error("Couldnt find element in the DOM");
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleSaveItems(){
    console.log('save items');
    localStorage.setItem('items',JSON.stringify(items));
  }

  function getItemsFromStorage():Item[] | undefined {
    try {
      const itemsString = localStorage.getItem("items");
      if (!itemsString) throw new Error("Couldn't find items in storage");
  
      const items = JSON.parse(itemsString);
      return items;
      console.log(items);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  