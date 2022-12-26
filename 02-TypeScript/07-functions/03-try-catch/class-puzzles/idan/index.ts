while(true){
    const userInputProduct = prompt('enter product i.e ice-cream, cake, cookie');
    alert(`price is ${productPrice(userInputProduct)}`);
}



function productPrice(product:string | null):number | false{
    const cookiePrice:number = 5;
    const iceCreamPrice:number = 8;
    const cakePrice:number = 70;
    try{
        switch (product){
            case `ice-cream`:
                return iceCreamPrice;
            case `cake`:
                return cakePrice;
            case `cookie`:
                return cookiePrice;
            default:
            throw new Error('no matching product name');
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}