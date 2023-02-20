const productPrice:Function=(product:string):number|undefined=>{
  try {
    
 
    switch(product){
        case "ice-cream":
            return 8;
            break;
            case "cake":
                return 20;
                break
                case "cookie":
                    return 5;
    break;
    default:throw new Error('no matching product name');

    }
       
    
  } catch (error) {
    console.error(error)
    return undefined
  } 
}

const product:string|null=prompt(" which item would you like to buy?")
if(isNaN(product)){
if(product!==""){
const answer=productPrice(product)
    alert(`its shouls cost you ${answer} NIS`)}
    else{ alert("you should enter a product")}}
else{alert("you sould enter aproduct")}