function addItems(items:Product[]) {
    if(getItems() != null) {
        const temp = getItems()
        items.forEach((item) => {
            temp.push(item);
        })
        localStorage.setItem("items", JSON.stringify(temp));
    } else {
        localStorage.setItem("items", JSON.stringify(items));
    }
}
    
function render(ele:string) {
    try {
        
        const element = document.querySelector(ele.toString());
        if(!element) throw new Error("Element does not exits");
        const items = getItems().sort(
            (p1, p2) => 
            (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);  
        console.log(items);
        
        
        if(!items) throw new Error("Items empty");
        const html = items.map((item) => {
            
            return `
            <div class="itemCard">
                <h2>${item.name}</h2>
                <h4>Price: ${item.price}</h4>
                <h4>Size: ${item.size}</h4>
                <h4>Type: ${item.type}</h4>
                <img src="${item.img}" alt="cart">
                <button onclick="deleteProduct('${item.id}')">Delete</button>
            </div>
            `
        }).join("\n");
        console.log(html);
        
        element.innerHTML = html;
        
    } catch (error) {
        console.error(error);
        
    }
}

function renderStore(ele:string) {
    try {
        
        const element = document.querySelector(ele.toString());
        if(!element) throw new Error("Element does not exits");
        const items = getItems().sort(
            (p1, p2) => 
            (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);   
        console.log(items);
        
        
        element.innerHTML = "No products at the moment";
        if(items.length == 0) {
            throw new Error("Items empty");
        } 
        const html = items.map((item) => {
            
            return `
            <div class="itemCard">
                <h2>${item.name}</h2>
                <h4>Price: ${item.price}</h4>
                <h4>Size: ${item.size}</h4>
                <h4>Type: ${item.type}</h4>
                <img src="${item.img}" alt="cart">
            </div>
            `
        }).join("\n");
        console.log(html);
        
        element.innerHTML = html;
        
    } catch (error) {
        console.error(error);
        
    }
}

function deleteProduct(id:string) {
    const temp:any = getItems();
    try {
        if(!temp) throw new Error("Items empty");
        const i = temp.findIndex((item) => item.id == id.toString());
        if(i == -1) throw new Error("Item not found");
        temp.splice(i,1)
        localStorage.setItem("items", JSON.stringify(temp));
        render(".test")
        render(".card")
    } catch (error) {
        console.error(error);
    } 
}

function hi(id:number, ele:string) {
    document.body.style.backgroundColor = "black"
}

