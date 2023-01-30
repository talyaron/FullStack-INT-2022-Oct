
class Item{

    uid: string;

    constructor(
        public name:string,
         public color:string ,
          public price:number ,
          public category :string,
          public sn :string
          )
    {

        this.uid = name + color + price + category + sn;

    }
    
}



const items :Item [] = [];

//items.push(new Item('Vanilla Chocolate','pink',150, 'Mousse Cake',"fgdfgsdg543534t345"))




  
