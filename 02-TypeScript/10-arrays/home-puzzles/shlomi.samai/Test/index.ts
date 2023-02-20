class Product {
  public constructor (
    public price:number,
    public name:string,
    public department:string,
    public searchString:string, 
  )
  {}
  }
  
  const shirt= new Product(150,"shirt","man","test")
  const pants= new Product(50,"pants","woman","test")
  const hat= new Product(70,"hat","man","test")
  const dress= new Product(125,"dress","woman","test")
  
  
  const products:Product[]=[shirt,pants,hat,dress]
  
  const filteredProducts:Product[]=products.filter(checkType);
  const sortedArray:Product[]=products.sort(function(a,b){return a.price-b.price})
  
  function checkType(product:Product) {
    return product.department==="man"
  }

  //console.log(filteredProducts)
 // console.log(sortedArray)
  //console.log(sortedArray[0])
  
  const filteredProductsTest:Product[]=products.filter(checkString);
  const userInput=prompt("enter your search:")
  let i=0
  while (i<=products.length-1&& userInput!==null){
    products[i].searchString=userInput
    //console.log(products[i].searchString)
    i++
  }

  function checkString(input:Product) {
    try {
          while (input.searchString!==null){
          return input.name.includes(input.searchString)
      
          }
          return false
        }
           catch (Error) {
      console.error(Error);
        return false;
    }  
  }      
  console.log(filteredProductsTest)
  
  