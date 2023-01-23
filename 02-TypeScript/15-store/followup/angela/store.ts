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

function addStoreItems(obj){
    try {
        const brand = obj.target.elements.name.value;
        const color = obj.target.elements.color.value;
        const price = obj.target.elements.price.valueAsNumber;
        const category = obj.target.elements.category.value;
        const size = obj.target.elements.size.valueAsNumber;
        
        storeItems.push(new itemProprties(brand,color,price,category,size))
        let write:HTMLDivElement | null = document.querySelector(".popup");
        if(write){
        write.innerHTML =`<div class="popup" 
        <p>${storeItems}</p>
        </div>`
        
    }
    console.log(storeItems)
    } catch (error) {
        console.error(error)
    }
   
}
addStoreItems()

