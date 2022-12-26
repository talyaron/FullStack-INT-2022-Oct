
let userInput = prompt('enter product i.e ice-cream, cake, cookie');

alert(`price is ${productPrice(userInput)}`);





function productPrice(product:string | null):number | false{
    const cookiePrice:number = 5;
    const iceCreamPrice:number = 8;
    const cakePrice:number = 70;
    try{
        if(product !== `ice-cream` && product !== `cake` && product !== `cookie`){
            throw new Error('no matching product name');
        }
        switch (product){
            case `ice-cream`:
                return iceCreamPrice;
            case `cake`:
                return cakePrice;
            case `cookie`:
                return cookiePrice;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}