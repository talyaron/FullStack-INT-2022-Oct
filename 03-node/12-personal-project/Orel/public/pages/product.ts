

function renderCartItem() {
    try {

    } catch (error) {
        console.error(error)
    }
}

async function getProducts() {
    try {
        const rootProducts: HTMLElement | null = document.getElementById('rootProducts')
        if (!rootProducts) throw new Error("not found root Elements")

        const dataJs = await fetch(`/api/products/get-products`)
        if (!dataJs) throw new Error("no dataJs")

        const data = await dataJs.json()
        rootProducts.innerHTML = renderCardsShoe(data.products)

    } catch (error) {
        console.error(error)
    }
}

function renderAdminBtnEdit(id: string) {
    return `
        <div id="adminBtnEditProduct">
        <button onclick="handleClickRemoveProduct('${id}')">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        <button  onclick="handleClickEditProduct('${id}')">
        <i class="fa-solid fa-pen-to-square"></i>
            </button>
    </div>
        `
}
function renderCardsShoe(data: any): string {
    try {
        const html = data.map((product: any) => {
            return `     <div class="container__main__product" id="${product._id}">
            ${renderAdminBtnEdit(product._id)}
        <img src="${product.src}" width="150px">
        <h4 id="pName">${product.name}</h4>
        <p id="pDetail">${product.detail}</p>
            <form>
                <label for="size">size : </label>
                <select name="size" id="size"> 
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                </select>
                <h4>price: <span id="pPrice">${product.price}</span></h4>
                <button onclick="handleAddProductToCart('${product._id}')">ADD CART</button>
            </form>
</div>`
        }).join('')
        return html

    } catch (error) {
        console.error(error)
        return ""
    }
}

async function createNewItemToCart(productId:string){
    try {   
            const rootId:HTMLElement | null = document.getElementById(`${productId}`);
            if(!rootId) throw new Error("not found rootElement")
            const size:any=  rootId.querySelector('#size');
        if(!size) throw new Error("not size")
        const response = await fetch('/api/users/create-product-cart' , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 
                productId,
                size: size.value
            
             })

        })
        const data = await response.json();
        if (!data) throw new Error('no get data ');
        // if(data.ok === true) window.location.href = '/'
    } catch (error) {
        console.error(error);
    }
}
//close container collapse
function handleClickCloseCollapseContainer() {
    try {
        const closeCollapseContainerBtn: HTMLElement | null = document.querySelector('.collapse-container')
        if (!closeCollapseContainerBtn) throw new Error("no found BTN element")

        closeCollapseContainerBtn.classList.remove("active")
    } catch (error) {
        console.error(error)
    }
}
// btn for menu create product
function handleClickAddNewProduct() {
    try {
        const closeCollapseContainerBtn: HTMLElement | null = document.querySelector('.collapse-container')
        if (!closeCollapseContainerBtn) throw new Error("no found BTN element")

        closeCollapseContainerBtn.classList.add("active")
    } catch (error) {
        console.error(error)
    }
}

// remove
async function handleClickRemoveProduct(__id: string) {
    try {
if(confirm("Are You Sure To delete this item ?")){
    const dataJs = await fetch('/api/products/delete-product',
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',}
        },
        body: JSON.stringify({ __id })
    })
    const data = await dataJs.json();
    window.location.reload()
} else {
 return
}
    } catch (error) {
        console.error(error)
    }
}

//close btn
async function handleClickCloseEditProduct(__id:string){
    try {
        const rootElementById:HTMLElement | null = document.getElementById(`${__id}`)
        if(!rootElementById) throw new Error("not found root Element");
         const pName:HTMLElement | null = rootElementById.querySelector('#pName')
         if(!pName) throw new Error("not found pName");
         const pDetail:HTMLElement | null = rootElementById.querySelector('#pDetail')
         if(!pDetail) throw new Error("not found pDetail");
         const pPrice:HTMLElement | null = rootElementById.querySelector('#pPrice')
         if(!pPrice) throw new Error("not found pPrice");
         pName.setAttribute("contenteditable", "false")
         pName.style.backgroundColor = "unset"

         pDetail.setAttribute("contenteditable", "false")
         pDetail.style.backgroundColor = "unset"

         pPrice.setAttribute("contenteditable", "false")
         pPrice.style.backgroundColor = "unset"       
        alert("the changes Done!")
         
         const dataJs = await fetch('/api/products/update-product',
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',}
                },
                body: JSON.stringify({
                     __id  , 
                     pName:pName.textContent ,
                      pDetail:pDetail.textContent ,
                       pPrice:pPrice.textContent

                    })
            })
            const data = await dataJs.json();
            window.location.reload()
    } catch (error) {
        console.error(error)
    }
}

//edit product
async function handleClickEditProduct(__id: string) {
    try {
        
        if(confirm("Are You Sure To update this item ?")){
            const buttonChangeToSave:HTMLElement | null = document.getElementById('adminBtnEditProduct')
                if(!buttonChangeToSave) throw new Error("no button to change")
            
            buttonChangeToSave.innerHTML = `      
              <button onclick="handleClickCloseEditProduct('${__id}')">
              <i class="fa-solid fa-floppy-disk"></i>
        </button>`


            const rootElementById:HTMLElement | null = document.getElementById(`${__id}`)
            if(!rootElementById) throw new Error("not found root Element");
             const pName:HTMLElement | null = rootElementById.querySelector('#pName')
             if(!pName) throw new Error("not found pName");
             const pDetail:HTMLElement | null = rootElementById.querySelector('#pDetail')
             if(!pDetail) throw new Error("not found pDetail");
             const pPrice:HTMLElement | null = rootElementById.querySelector('#pPrice')
             if(!pPrice) throw new Error("not found pPrice");

             pName.setAttribute("contenteditable", "true")
             pName.style.backgroundColor = "rgba(0, 0, 46, 0.295)"

             pDetail.setAttribute("contenteditable", "true")
             pDetail.style.backgroundColor = "rgba(4, 5, 63, 0.295)"

             pPrice.setAttribute("contenteditable", "true")
             pPrice.style.backgroundColor = "rgba(4, 5, 63, 0.295)"

        } else {
         return
        }
            } catch (error) {
                console.error(error)
            }
}

//add new product
async function handleSubmitNewProduct(ev:any) {
    try {
        const { name, detail, src, price } = ev.target.elements
   
        const sendToServer = await fetch('/api/products/add-product', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                src: src.value,
                name: name.value,
                detail: detail.value,
                price: Number(price.value),
            })
        })
            .then((response) =>  response.json())
            .catch(err => console.log(err))

    } catch (error) {
        console.error(error)
    }
} 


 function handleAddProductToCart(uid:string ){
    try {
        createNewItemToCart(uid)
        
    } catch (error) {
        console.error(error)
    }
}