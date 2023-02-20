function handleAddItem(ev){
    try {
        ev.preventDefault()
       console.log(ev);
       
        const name = ev.target.elements.name.value;
        const color = ev.target.elements.color.value;
        const price = ev.target.elements.price.valueAsNumber;
        const category = ev.target.elements.category.value;
        const size = ev.target.elements.size.valueAsNumber;
        const sn = ev.target.elements.sn.value;
        const email = ev.target.elements.email.value;
     

        items.push(new Item(name,color,price,category,size, sn,email));
        console.log(items)
        ev.target.reset()

    } catch (error) {
        console.error(error)
    }
}