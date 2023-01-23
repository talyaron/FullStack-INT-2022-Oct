class Item {
    uid:string;
    constructor(
    public name: string,
    public color: string,
    public price: number,
    public category: string,
    public size: number,
    public sn: string
    ) {
        this.uid = uid()
    }
}

const items:Item[]= [];

