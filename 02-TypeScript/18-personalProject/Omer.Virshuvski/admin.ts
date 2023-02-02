render(".test")
try {
    if(!form) throw new Error("Form not exists");
        form.addEventListener('submit', (ev:any) => {
            ev.preventDefault();
            console.log(ev);
        
            const name = ev.target.elements.name.value;
            const type = ev.target.elements.type.value;
            const price = ev.target.elements.price.value;
            const size = ev.target.elements.size.value;
            const img = ev.target.elements.img.value;
            const items:Product[] = []
            items.push(new Product(name,type,price,size,img));
            console.log(items);
            addItems(items);
            render(".test")
            renderStore(".main")
            ev.target.reset();
    })
} catch (error) {
    console.error(error);
}



