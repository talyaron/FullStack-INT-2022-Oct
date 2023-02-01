var form = document.getElementById("theForm");
function getItems() {
    try {
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("No items");
        var items = JSON.parse(itemsString);
        return items;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
