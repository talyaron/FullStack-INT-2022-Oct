class Item {
constructor (
public name:string,
public price:number,
){}
}

const items:Item[]=[];

items.push(new Item('shirt',45))
console.log(items)