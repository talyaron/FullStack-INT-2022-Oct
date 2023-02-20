function handleAddCounter() {
    try {
        //increase counter
        //make some  changes to the data
        counter.increment();
        //render counter
        //update view
        renderCounter(counter.count);
    }
    catch (error) {
        console.error(error);
    }
}
