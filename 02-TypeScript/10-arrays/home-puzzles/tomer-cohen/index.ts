class tomershop {
  public constructor(
    public name:string,
    public department:string,
    public type:string,
    public price:number
  ) {}
}
const airPods3= new tomershop(`airpods3`,`headphone`,`apple`,199);
const airPodsPro= new tomershop(`airpods pro`,`headphone`,`apple`,299);
const airPodsMax= new tomershop(`airpods max`,`headphone`,`apple`,499);
const iphone12= new tomershop(`iphone 12`,`phones`,`apple`,599);
const iphone13= new tomershop(`iphone 13`,`phones`,`apple`,699);
const iphone14= new tomershop(`iphone 14`,`phones`,`apple`,799);
const S21= new tomershop(`S21`,`phones`,`samsung`,399);
const S22= new tomershop(`S22`,`phones`,`samsung`,799);
const S20= new tomershop(`S20`,`phones`,`samsung`,299);

const products:tomershop[]= [
    airPods3,
    airPodsPro,
    airPodsMax,
    iphone12,
    iphone13,
    iphone14,
    S20,
    S21,
    S22
];
console.log(getAllItemInType(products));
const sortedArr= sortArrByPrice(products);
if(sortedArr)
console.log(cheapestItem(sortedArr));


function getAllItemInType(productsArr:tomershop[]){
  try {
    if(productsArr.length==0)
    throw new Error(`there is no item in the store`);
    let typeGetFromUser;
    while (!typeGetFromUser){ 
      typeGetFromUser = prompt (`Enter the type of item you will want to buy:`)
    }
    const selectproductarry = productsArr.filter(item => item.type== typeGetFromUser)
    if(selectproductarry.length==0)
    throw new Error(`items from type ${typeGetFromUser} is availble in our store`)
    return selectproductarry;
  } catch (error) {
    console.error(error);
    return false;
  }

}

function sortArrByPrice(productsArr:tomershop[]): tomershop[] | false{
    try {
      if (productsArr.length==0)
          throw new Error(`there is no item in the store`);
      const sortedArr = productsArr.sort((a, b) => a.price - b.price);
      return sortedArr;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
function cheapestItem(sortedArr:tomershop){
    try {
        const lowItem= products.filter(tomershop => tomershop.price== sortedArr[0])
        return sortedArr;  
    } catch (error) {
        console.error(error);
        return false;
    }

}
