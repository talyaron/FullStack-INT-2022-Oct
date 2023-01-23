// להזין את את המוצרים מהיוזר

//תמונה,שם,כמות ,מחיר

function getProductFromUser() {
    try {
        const imgUrl = prompt("Enter product imgUrl:")
        const name = prompt("Enter product name:");
        const quantity = prompt("Enter product quantity:")
        const _price = prompt("Enter product price:");

        if (!imgUrl || !name || !quantity || !_price) throw new Error("All fields are required");

        const price = parseInt(_price)
        if (typeof price !== "number") throw new Error("price is not a number");

        product.push(new Product(imgUrl, name, quantity, price));


    } catch (error) {
        console.error(error);
    }
}

function renderProducts(product: Product[], rootProducts: Element | null): void {
    try {

        if (!rootProducts) throw new Error("no dom elrment to render the product to");
        let html = "";


        product.forEach((product) => {
            html += `<div class ="card">
          
             <img src="${product.imgUrl}">
             <h3>${product.name}<h3>
             <p> quantity:${product.quantity}<p>
             <p> Price: ${product.price}$<p>
        </div>`;
        })
        console.log(html);

        // if (!rootProducts) throw new Error("");
        rootProducts.innerHTML = html;

    }
    catch (error) {
        console.error(error);
    }
}





