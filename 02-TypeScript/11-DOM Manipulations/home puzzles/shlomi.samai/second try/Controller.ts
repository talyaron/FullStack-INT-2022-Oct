
function getProduct(){
    try {
        const shirt = new Product("shirt1", "summer", 1996, "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/10/image-dpi.jpg?q=50&fit=crop&w=660&h=340&dpr=1.5");
        products.push(shirt)
        console.log(products)
        return products

    } catch (error) {
        console.error(error)
        return false
    }
}

console.log(products)
getProduct()

const inputURL:string=products[0].pictureURL
const html:HTMLDivElement|null=document.querySelector("#list")
if (html!==null){

  html.innerHTML= `<div class="list"> 
  <img src='${inputURL}'/>
  
  </div>`

}
console.log(html)

