class ClothingStore{
    constructor(public name:string,public price:number,public departmen:string,public type :string){}
}
const Raincoat=new ClothingStore("pink raincoat" ,50,"girls","coat");
const highBoots=new ClothingStore("blue high boots" ,100, "women shoes" ,"shoe")
const sweatSuit=new ClothingStore("adidas black sweat suit",70,"sport","suit")
const tShirt=new ClothingStore("superman T-shirt",40,"boys","shirt")
const longShirt=new ClothingStore("yello long shirt",40,"men","shirt")
const jeans=new ClothingStore("levis jeans 501",80,"men","trousers")
const leatherJacket=new ClothingStore("leather jacket",120,"men","jacket")

const clothing:ClothingStore[]=[Raincoat,highBoots,sweatSuit,tShirt,longShirt,jeans,leatherJacket]

//task 1:
const allShirts:ClothingStore[]=clothing.filter((item)=>item.type==="shirt")


 function listOfShirt(type:ClothingStore){
    console.log(type.name,type.price)
 }
 console.log(`list of shirts in the store:`)
 allShirts.forEach(listOfShirt)

 

 //task 2:

 clothing.sort((a,b)=> a.price-b.price)
function chipestItem(){
    return clothing[0].name

}

    console.log(`the chipest item in the store is ${chipestItem()}`)

//task 3:
 const menDipartment:ClothingStore[]=clothing.filter((dip)=>dip.departmen==="men")
  menDipartment.sort((a,b)=>a.price-b.price)

  function dipartmentList(index:ClothingStore){
    console.log(index.name,index.price)
  }
console.log(`list of clothing in men dipartment:`)
    menDipartment.forEach(dipartmentList)

    //task 4:

    const Name = clothing.map((item) => item.name)

    console.log(Name)
