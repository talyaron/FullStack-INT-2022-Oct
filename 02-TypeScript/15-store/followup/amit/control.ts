function handleAddItem(ev){
    try {
        ev.preventDefault()
       
        const name = ev.target.elements.name.value;
        const color = ev.target.elements.color.value;
        const price = ev.target.elements.price.valueAsNumber;
        const category = ev.target.elements.category.value;
        const size = ev.target.elements.size.valueAsNumber;
        const sn = ev.target.elements.sn.value;
        const gender = ev.target.elements.gender.value;
     
        items.push(new Item(name,color,price,category,size, sn, gender));
        console.log(items)
        ev.target.reset()

        console.log(name)
    } catch (error) {
        console.error(error)
    }
}