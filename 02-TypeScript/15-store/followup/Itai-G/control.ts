function handelAddItem(e){
    try {
        e.preventDefault()

        const name = e.target.elements.name.value;
        const color = e.target.elements.color.value;
        const price = e.target.elements.price.value;
        const category = e.target.elements.category.value;
        const size = e.target.elements.size.value;
        const sn = e.target.elements.sn.value;

        items.push(new Item(name,color,price,category,size,sn))
        console.log(items)
        e.target.reset()

    } catch (error) {
        console.error(error)
    }
}