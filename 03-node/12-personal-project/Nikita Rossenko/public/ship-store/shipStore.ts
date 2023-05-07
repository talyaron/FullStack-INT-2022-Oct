async function renderCartItems(){
    try {
        let itemsCardHtml = ""
        let itemsQuantityNumber = 0
        const cartItems = document.querySelector(".cartItems")
        const itemsQuantity:any = document.querySelector(".itemsQuantity")
        if (!cartItems) throw new Error("Can't catch cart!")
        if (!itemsQuantity) throw new Error("Can't catch quantity!")

        const response = await fetch("/api/v1.0/cart/get-cart-items")
        const data = await response.json()
        const cartItemsArray = data.cartItemsArray

        for (let i = 0 ; i < cartItemsArray.length ; i++){
            itemsQuantityNumber+=cartItemsArray[i].quantity
            itemsCardHtml += `<div class="item">
            <p>Name: ${cartItemsArray[i].product.starshipName}</p>
            <p>Price: ${cartItemsArray[i].product.starshipPrice}$</p>
            <p>Quantity: ${cartItemsArray[i].quantity}</p>
            <p>Type: ${cartItemsArray[i].product.itemType}</p>
            <button id="${cartItemsArray[i]._id}" onclick="deleteItemFromCart(this)">Delete</button>
        </div>`
        }
        itemsQuantity.innerText=`${itemsQuantityNumber}`

        cartItems.innerHTML = itemsCardHtml

        


    } catch (error) {
        console.error(error)
    }
}

function openShop(){
    try {
        const videoContainer:any = document.querySelector(".video_container")
        const sliderContainer:any = document.querySelector(".sliderContainer")
        if (videoContainer && sliderContainer){
            renderStarships()
            videoContainer.remove()
    
            sliderContainer.style.display = "flex"
        }
    } catch (error) {
        console.error(error)
    }
}

function openAddDialog() {
    try {
        const body = document.querySelector('body')

        if (!body) throw new Error("body Error!")

        body.insertAdjacentHTML("beforeend", '<div class="addStarshipContainer"><div class="addStarshipSubContainer"><form onsubmit=addStarship(event)><input class="input" required type="text" name="itemName" placeholder="Starship Name"><input class="input" required type="text" name="itemModel" placeholder="Starship Model"><input class="input" required type="number" name="itemPrice" placeholder="Starship Price"><input class="input" required type="text" name="starshipDescription" placeholder="Starship Description"><input type="submit" value="Add"></form></div></div>')
    } catch (error) {
        console.error(error)
    }
}

function addStarship(e:any){
    try {
        e.preventDefault();

        const starshipName = e.target.elements.itemName.value;
        const starshipModel = e.target.elements.itemModel.value;
        const starshipPrice = e.target.elements.itemPrice.value;
        const starshipDescription = e.target.elements.starshipDescription.value;
        const carouselInner = document.querySelector(".carousel-inner")
        if (!carouselInner) throw new Error("Carousel Error!")
        if (!starshipName || !starshipModel || !starshipPrice || !starshipDescription) throw new Error("Please fill all the feilds!")

        const newStarship:any = { starshipName , starshipModel, starshipPrice, starshipDescription }

        fetch("/api/v1.0/items/add-starship", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newStarship),

        })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok === true){
                const addStarshipContainer = document.querySelector(".addStarshipContainer")
                if (!addStarshipContainer) throw new Error("addStarshipContainer Error!")
                addStarshipContainer.remove()
                renderStarships()
            } else {
                console.error("Couldn't add item")
            }
        })
        .catch((error) => {
            console.error(error)
        })


    } catch (error) {
        console.error(error)
    }
}

async function renderStarships() {

    try {
        const response = await fetch("/api/v1.0/items/get-starship");
        const data = await response.json()
    
        if(data.ok === true) {
            const starshipsArray = data.starships
            const carouselInner = document.querySelector(".carousel-inner")
            let itemClass = "item active"
            if (!carouselInner) throw new Error("Corousel Error!")

            if (starshipsArray.length > 0) {
                for (let i = 0 ; i<starshipsArray.length ; i++){
                    if (i != 0){
                        itemClass="item"
                    }
                    carouselInner.insertAdjacentHTML("beforeend", `<div class="${itemClass}">
                    <video class="spaceshipVideo" onmouseover="this.play()" onmouseout="this.pause()" loop src="${starshipsArray[i].starshipModel}" ></video>
                    <div class="carousel-caption">
                        <h3>${starshipsArray[i].starshipName}</h3>
                        <p>${starshipsArray[i].starshipDescription}</p>
                        <p>Price: ${starshipsArray[i].starshipPrice}$</p>
                        <button id="${starshipsArray[i]._id}" onclick="addItemToCart(this)" class="spaceshipBtn">Add to cart</button>
                    </div>
                </div>`)
                }
            }

            
        }
    } catch (error) {
        console.error(error)
    }
}

async function addItemToCart(item){
    try {
        const itemId = {itemId:item.id};
        const response = await fetch("/api/v1.0/cart/add-item-to-cart", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(itemId),

        })
        const data = await response.json()
        renderCartItems()
        if (data.ok === false) throw new Error("Couldn't add item to cart!")
            
    } catch (error) {
        console.error(error)
    }

}

async function deleteItemFromCart(cartItem) {
    try {
        const cartItemId = {_id:cartItem.id}

        const response = await fetch("/api/v1.0/cart/delete-item-from-cart", {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify(cartItemId),

        })
        const data = await response.json()
        renderCartItems()
        if (data.ok === false) throw new Error("Couldn't add item to cart!")
    } catch (error) {
        console.error(error)
    }
}


renderCartItems()