function handleAddItem(ev) {
    try {
        debugger;
        ev.preventDefault();
        var input = ev.target.text.value;
        items.push(input);
        console.log(items);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
