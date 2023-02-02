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
    
function render(ele:string, items:Product[]) {
    try {
        
        const element = document.querySelector(ele.toString());
        if(!element) throw new Error("Element does not exits");

        
        if(!items) throw new Error("Items empty");
        items.sort((function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }))
        const html = items.map((item) => {
            
            return `
            <div class="main__card">
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

function renderStore(ele:string, items:Product[]) {
    try {
        
        const element = document.querySelector(ele.toString());
        if(!element) throw new Error("Element does not exits");
        
        
        element.innerHTML = "No products at the moment";
        if(items.length == 0) {
            throw new Error("Items empty");
        } 
        const html = items.map((item) => {
            
            return `
            <div class="main__card">
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
    const temp = getItems();
    try {
        if(!temp) throw new Error("Items empty");
        const i = temp.findIndex((item) => item.id == id.toString());
        if(i == -1) throw new Error("Item not found");
        temp.splice(i,1)
        localStorage.setItem("items", JSON.stringify(temp));
        render(".test", getItems())
        renderStore(".main", getItems())
    } catch (error) {
        console.error(error);
    } 
}

sortName.addEventListener('click', () => {
    try {
        const temp = getItems();
        if(!temp) throw new Error("Items empty");
        
        temp.sort((function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }))
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);
        
    }
})

sortPrice.addEventListener('click', () => {
    try {
        const temp = getItems();
        if(!temp) throw new Error("Items empty");
        
        temp.sort((function(a, b){
            if(a.price > b.price) { return -1; }
            if(a.price < b.price) { return 1; }
            return 0;
        }))
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);
        
    }
})

sortType.addEventListener('click', () => {
    try {
        const temp = getItems();
        if(!temp) throw new Error("Items empty");
        
        temp.sort((function(a, b){
            if(a.type > b.type) { return -1; }
            if(a.type < b.type) { return 1; }
            return 0;
        }))
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);
        
    }
})

ham.addEventListener('click', () => {
    try {
        if(!hamTop || !hamMid || !hamBottom || !menu) throw new Error("No elements");
        if(change) {
            hamTop.classList.add("closeTop");
            hamMid.classList.add("closeMid");
            hamBottom.classList.add("closeBottom");
            menu.classList.add("menuShow")
            change = false;
        } else {
            hamTop.classList.remove("closeTop");
            hamMid.classList.remove("closeMid");
            hamBottom.classList.remove("closeBottom");
            menu.classList.remove("menuShow")
            change = true;
        }
    } catch (error) {
        console.error(error);
        
    }
})