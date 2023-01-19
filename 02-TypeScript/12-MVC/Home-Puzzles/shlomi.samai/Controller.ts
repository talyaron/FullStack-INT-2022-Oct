function getProduct(){
    try {
        const nameInput=prompt("what is the name of the item?")
        const departmentInput=prompt("what is the name of the department?")
        const yearInput=prompt("what is the name of the item?")
        const pictureURLInput=prompt("what is the name of the item?")

        const shirt = new Product(nameInput, departmentInput, yearInput, pictureURLInput);
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


