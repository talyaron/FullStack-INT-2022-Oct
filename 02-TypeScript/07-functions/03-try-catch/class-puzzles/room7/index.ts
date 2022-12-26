const desert= prompt ("Enter the desert you want to order:");
if (desert==" " || !desert){
    console.log(`you don't enter a value`);
} else {
const price= priceOfDesert(desert);
if (price!=false){
    console.log(`the price for a ${desert} is ${price}`);
} else {
    console.log(`We dont serve this desert.`);
}
}

function priceOfDesert (desert:string):number | false{
    try {
        switch (desert){
            case "ice-cream":
               return 8;
               break;
            case "cake":
                return 70;
                break;
            case "cookie":
                return 5;
                break;
            default:
                throw new Error('We dont serve this desert.');            
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}