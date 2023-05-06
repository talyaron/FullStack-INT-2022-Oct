interface Product {
    name:string;
    descreption:string;
    price:number;
    imgUrl:string;
    _id:string;
}



function renderProducts(product: Product) {
    try {
        const html = `
        <div id="productId" class="storeItem">
        <img src="${product.imgUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.descreption}</p>
        <p>$${product.price}</p>
        <div>
          <input type="number" id="quantityInput${product._id}" value="1" min="1">
          <button onclick="addToCart('${product._id}')">Add to Cart</button>
        </div>
        </div>
      `;
      const containerRoot = document.querySelector("#productsContainer");
      if (!containerRoot) throw new Error("containerRoot not found");
      containerRoot.innerHTML += html;
      console.log(product.descreption)
      
    } catch (error) {
      console.error(error);
    }
  }

  function handleGetProduct() {
    try {
      
      fetch("/api/products/get-products")
        .then((res) => res.json())
        .then(({ products }) => {
          if (!products) throw new Error("didnt find product");
          const html = products
          .map((products) => {
            return   renderProducts(products);
          })
        
        });
    } catch (error) {
      console.error(error);
    }
  }

  function addToCart(_id:string){
        try {
          const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
          if(!currentLocalStorageUser){
            window.location.href = "/login/index.html";
            return
          }
          const currentUser = JSON.parse(currentLocalStorageUser)
          fetch(
            "/api/cart/add-item?" +
              new URLSearchParams({ _id, userId:currentUser._id }).toString(),
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
            .then(() => {
              const productId = document.getElementById(_id);
            
            })
      
            .catch((error) => {
              console.error(error);
            });
        } catch (error) {
          console.error(error);
        }
      }
