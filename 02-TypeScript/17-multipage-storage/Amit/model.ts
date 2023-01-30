const items:Array<any> = [];

function handleAddItem(ev:any){
    try {
        ev.preventDefault();
    
    items.push();
    localStorage.setItem('item', JSON.stringify(items));

        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}

function getItemsFromStorage(): [] | undefined{
    try {
      const itemsString = localStorage.getItem('items');

      if(!itemsString) throw new Error ("could not find item");

      const items = JSON.parse(itemsString);
      
       return items;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

