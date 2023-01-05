interface MagicMarker {
    title: string;
    price: number;
    color: string;
    discount: Function
}

const yellow: MagicMarker = {
    title: "yellow",
    price: 100,
    color: "yellow",
    discount: function (): number {
        return this.price * 0.80;
    }
}

console.dir(`the price of ${yellow.title} after discount ${yellow.discount()} `);



