function handleAddItem(ev: any) {
    try {
      const name = ev.target.elements.name.value;
      const price = ev.target.elements.price.valueAsNumber;
      const category = ev.target.elements.category.value;
      const sn = ev.target.elements.sn.value;
  
      items.push(new Item(name, price, category, sn));
      localStorage.setItem('items',JSON.stringify(items));
      ev.target.reset();
  
      console.log(name);
      if (!rootItems) throw new Error("rootItems is null");
  
      renderItems(items, "rootItems");
    } catch (error) {
      console.error(error);
    }
  }