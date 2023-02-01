const form = <HTMLElement>document.getElementById("theForm");
function getItems() {
    try {
        const itemsString = localStorage.getItem("items");
        if(!itemsString) throw new Error("No items");
        const items = JSON.parse(itemsString);
        
        return items;
    } catch (error) {
        console.error(error);
        return null
        
    }
}
