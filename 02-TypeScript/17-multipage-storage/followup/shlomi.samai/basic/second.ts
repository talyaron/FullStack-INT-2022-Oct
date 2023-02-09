function handleAddItem(ev:any){
    try {
        debugger;
        ev.preventDefault();
        const input=ev.target.text.value;
        items.push(input);
        console.log(items);
        ev.target.reset();

    } catch (error) {
       console.error(error) 
    }
}