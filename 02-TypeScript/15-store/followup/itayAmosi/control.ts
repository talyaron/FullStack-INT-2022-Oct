function handleAddItem(event){
    try {
        event.preventDefault()

        const name =event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const type = event.target.elements.type.value;
        const size = event.target.elements.size.value;
        const serial = event.target.elements.serial.value;


        products.push(new Product(name,price,type,size,serial));
        console.log(products)
        event.target.reset()

        console.log(name)
    } catch (error) {
        console.error(error)
    }
}




