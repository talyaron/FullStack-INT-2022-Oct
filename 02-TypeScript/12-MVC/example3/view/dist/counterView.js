function renderCounter(counter) {
    try {
        var rootCounter = document.querySelector("#rootCounter");
        if (!rootCounter)
            throw new Error("rootCounter is not defined");
        rootCounter.innerHTML = "<h1>" + counter.toString() + "</h1>";
    }
    catch (error) {
        console.error(error);
    }
}
