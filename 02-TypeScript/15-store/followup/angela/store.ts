class itemProprties {
    constructor(
        public brand:string,
        public color:string,
        public price:number,
        public category:string,
        public size:number,
        
    ){

    }
}

const storeItems:itemProprties[]=[];

function addStoreItems(ev){
    try {
        const brand = ev.target.elements.name.value;
        const color = ev.target.elements.color.value;
        const price = ev.target.elements.price.valueAsNumber;
        const category = ev.target.elements.category.value;
        const size = ev.target.elements.size.valueAsNumber;
        
        storeItems.push(new itemProprties(brand,color,price,category,size))
        
        console.log(storeItems)
    }
    
     catch (error) {
        console.error(error)
    }
}
   
console.log(storeItems)

