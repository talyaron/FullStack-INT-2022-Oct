function handleAddItem(ev){
try {
    ev.preventDefault()
    const name=ev.target.elements.name.value;
    const price=ev.target.elements.price.valueAsNumber;
    items.push(new Item(name,price))
    console.log(items)
    ev.target.reset()
} 

catch (error) {
   console.error(error) 
}
}