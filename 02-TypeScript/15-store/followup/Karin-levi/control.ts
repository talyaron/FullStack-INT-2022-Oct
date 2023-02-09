function handleAddItem(ev){
    try {
        ev.preventDefault()
       
        const name = ev.target.elements.name.value;
        const shape = ev.target.elements.color.value;
        const color = ev.target.elements.price.value;
        const price = ev.target.elements.category.valueAsNumber;
        const serialNumber = ev.target.elements.size.valueAsNumber;
     

        items.push(new Item(name,shape,color,price,serialNumber));
        console.log(items)
        ev.target.reset()

        console.log(name)
    } catch (error) {
        console.error(error)
    }
}