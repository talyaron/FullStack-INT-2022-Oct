class Item {
    uid: string;

    constructor(
        public name: string,
        public shape: string,
        public color: string,
        public price: number,
        public serialNumber: string
    ){
        this.uid = uid()
    }
}

const items:Item[] = [];

items.push(new Item('sunglasses', 'oval', 'black', 100, '537fn68'))
console.log(items)