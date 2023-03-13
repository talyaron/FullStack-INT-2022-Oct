//creating local storage for items for the first time only
if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify([]))
    for (let i = 0; i < itemsTemp.length; i++) {
        const element = itemsTemp[i];
        pushToStorage(element);
    }
    renderToAdmin(".display", getItems());
} else {
    const str = localStorage.getItem("items");
    if(str == "[]") {
        for (let i = 0; i < itemsTemp.length; i++) {
            const element = itemsTemp[i];
            pushToStorage(element);
        }
    }
    renderToAdmin(".display", getItems());
}
//adding to storage
function pushToStorage(item: Item) {
    try {
        const temp = getItems()
        if (temp != null) {
            temp.push(item)
            localStorage.setItem("items", JSON.stringify(temp));
        } else {
            localStorage.setItem("items", JSON.stringify(item));
        }
    } catch (error) {
        console.error(error);
    }


}

//adding event listener to form
try {
    if (!form) throw new Error("Form was not found");
    form.addEventListener("submit", (ev: any) => {
        ev.preventDefault();
        if (!ev.target) throw new Error("Target of event is null");
        const name = ev.target.elements.name.value;
        const details = ev.target.elements.details.value;
        const img = ev.target.elements.img.value;
        const price = ev.target.elements.price.value;
        const type = ev.target.elements.type.value;
        const item: Item = new Item(name, img, details, price, type);
        pushToStorage(item);
        if (!getItems()) throw new Error("Item could not be added to storage");
        renderToAdmin(".display", getItems());
        renderMeals()
        ev.target.reset();
    })

} catch (error) {
    console.error(error);
}
//revealing adding form
let changeBoolean = true;
try {
    if(!revealBtn) throw new Error("No HTML element");
    revealBtn.addEventListener("click", () => {
        if(!form) throw new Error("Form not found");
        if(changeBoolean) {
            form.classList.remove("none");
            revealBtn.innerText = "Dismiss"
            changeBoolean = false;
        } else {
            form.classList.add("none");
            revealBtn.innerText = "Add"
            changeBoolean = true;
        }
    });
} catch (error) {
    console.error(error);
}
//render
function renderToAdmin(whereTo: string, items: Item[] | null) {
    const display = <HTMLElement>document.querySelector(whereTo);
    if (!display) throw new Error("Display not found");
    if (!items) throw new Error("Items empty");
    const html = items.map((item) => {
        return `
        <div class="display__card">
            <div class="display__card__item">
                <div class="display__card__item__headlineImg">
                    <img src="${item.imgLink}" width="100px" height="100px">
                </div>
                <div class="display__card__item__details">
                    <h2>${item.name}</h2>
                    <h5>${item.details}</h5>
                    <h4>${item.price}</h4>
                </div>
            </div>
            <div class="display__card__change">
                <button id="delete" onclick="deleteFromAdmin('${item.uid}')">Delete</button>
                <a href="#change"><button id="update" onclick="updateFromAdmin('${item.uid}')">Uptade</button></a>
            </div>
        </div>
        `
    }).join("\n");
    display.innerHTML = html;
}
//delete item
function deleteFromAdmin(id: string) {
    try {
        const items = getItems();
        if (!items) throw new Error("No items");
        const index = items.findIndex((item) => item.uid == id.toString());
        if (index == -1) throw new Error("Item is not in storage");
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items))
        renderToAdmin(".display", getItems());
        renderMeals()
    } catch (error) {
        console.error(error);
    }
}

//update item
function updateFromAdmin(id: string) {
    try {
        const items = getItems();
        if (!items) throw new Error("No items");
        const index = items.findIndex((item) => item.uid == id.toString());
        if (index == -1) throw new Error("Item is not in storage");
        const item: Item = <Item>items[index];
        const html = `
            <form class="form" id="changeForm">
                <input type="text" name="name" placeholder="${item.name}">
                <textarea name="details"cols="30" rows="10" placeholder="${item.details}"></textarea>
                <input type="number" name="price" placeholder="${item.price}">
                <input type="text" name="img" placeholder="${item.imgLink}">
                <a href="#theForm"><input class="btn" type="submit" value="Submit"></a>
            </form>
        `;
        if (!change) throw new Error("HTML element not found");
        change.innerHTML = html;
        updateItem(item, index);
    } catch (error) {
        console.error(error);
    }
}
function updateItem(item: Item, index: number) {
    try {
        const changeForm = document.getElementById("changeForm");
        if (!changeForm) throw new Error("Form not found");
        changeForm.addEventListener('submit', (ev: any) => {
            ev.preventDefault();
            if (!ev.target) throw new Error("Target of event is null");
            const name = ev.target.elements.name.value;
            const details = ev.target.elements.details.value;
            const img = ev.target.elements.img.value;
            const price = ev.target.elements.price.value;
            if (name) {
                item.name = name;
            }
            if (details) {
                item.details = details;
            }
            if (price) {
                item.price = price;
            }
            if (img) {
                item.imgLink = img;
            }
            const items = getItems();
            if (!items) throw new Error("No items");
            items[index] = item;
            localStorage.setItem("items", JSON.stringify(items))
            renderToAdmin(".display", getItems());
            renderMeals()
            change.innerHTML = "";
        })
    } catch (error) {
        console.error(error);
    }

}