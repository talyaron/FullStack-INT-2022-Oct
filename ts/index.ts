function getPrice(product:string)
{
    switch (priceList)
    {
        case "cookie":
        return "8 Shekels";
        
        case "cake":
        return "80 shekels";
        
        default:
            return(`I am sorry, we do not sell ${product}`);

    }
}

const product = prompt("what would you like to buy");


try {
    const price = getPrice(product);
    alert(`it should cost you ${price}`)
}
function getPrice();


