class Product {
    public constructor (
      public price:number,
      public name:string,
      public department:string,
    )
    {}
    }
    
    const shirt= new Product(150,"shirt","man")
    const pants= new Product(50,"pants","woman")
    const hat= new Product(70,"hat","man")
    const dress= new Product(125,"dress","woman")
    
    
    const products:Product[]=[shirt,pants,hat,dress]
    
    const filteredProducts:Product[]=products.filter(checkType);
    const sortedArray:Product[]=products.sort(function(a,b){return a.price-b.price})
    
    function checkType(product:Product) {
      return product.department==="man"
    }
    console.log(filteredProducts)
    console.log(sortedArray)
    console.log(sortedArray[0])
    
    const filteredProductsTest:Product[]=products.filter(checkString);
    const userInput=prompt("enter your search:")
    
    function checkString(product:Product) {
      while (userInput!==null){
      //console.log(product.name.includes("t"))
      return product.name.includes(userInput)
      }
      return false
    }
     
    console.log(filteredProductsTest)
    
    