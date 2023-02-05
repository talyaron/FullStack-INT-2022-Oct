render(".test", getItems())
try {
    if(!form) throw new Error("Form not exists");
        form.addEventListener('submit', (ev:any) => {
            ev.preventDefault();
            console.log(ev);
        
            const color = ev.target.elements.color.value;
            const name = ev.target.elements.name.value;
            const type = ev.target.elements.type.value;
            const price = ev.target.elements.price.value;
            const size = ev.target.elements.size.value;
            const img = ev.target.elements.img.value;
            const item = (new Product(name,type,price,size,color,img));
            console.log(item);
            addItems(item);
            render(".test", getItems())
            renderStore(".main", getItems())
            ev.target.reset();
    })
} catch (error) {
    console.error(error);
}



