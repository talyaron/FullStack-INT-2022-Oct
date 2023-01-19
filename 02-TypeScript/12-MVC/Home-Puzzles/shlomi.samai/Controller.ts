
function getProduct(){
    let i=0;  
    try {
     for (i=0;i<=1;i++) {   
        const nameInput=prompt("what is the name of the item?")
        const departmentInput=prompt("what is the name of the department?")
        const yearInput=prompt("what is the name of the item?")
        const pictureURLInput=prompt("what is the name of the item?")

        const shirt = new Product(nameInput, departmentInput, yearInput, pictureURLInput);
        products.push(shirt)
        console.log(products)
        }
        return products

    } catch (error) {
        console.error(error)
        return false
    }
}

console.log(products)
getProduct()
let j=0;
let page="";

for (j=0;j<=products.length-1;j++){
    page+=`<div class="list"> 
            <h3>${product[j].name}</h3>
            <h3>${product[j].department}</h3>
            <h3>${product[j].year}</h3>
            <img src='${products[j].pictureURL}'/> 
            </div>`
    }
const html:HTMLDivElement|null=document.querySelector("#list")
if (html!==null){

  html.innerHTML= page;
console.log(html)

}