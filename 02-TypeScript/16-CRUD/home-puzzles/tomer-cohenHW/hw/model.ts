class Item {
  uid: string;
  
  constructor(
    public name: string,
    public img: string,
    public price: number,
    public category: string,
    public size: number,
    public sn: string
  ) {
    this.uid = uid();
  }
}
const items:Item[] = [];

items.push(new Item('addias z45','blue',120,"shoes",44,"fgdfgsdg543534t345"))
console.log(items)
