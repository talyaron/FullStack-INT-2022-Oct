const items: Array<any> = [];

class Item {
    uid: string;
  
    constructor(
      public name: string,
      public price: number,
      public category: string,
      public sn: string
    ) {
      this.uid = uid();
    }
  }

  
  items.push(
    new Item("magnesium", 60, "supplements", "fgdfgsdg543534t345")
  );
  console.log(items);
  