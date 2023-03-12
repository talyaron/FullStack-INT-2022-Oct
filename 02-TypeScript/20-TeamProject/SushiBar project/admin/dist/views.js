/**get items storage(admin)
 * @returns Item[] || null
*/
function getItems() {
    try {
        if (!localStorage.getItem("items"))
            throw new Error("No items");
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("Items coulnd not be fount in storage");
        var items = JSON.parse(itemsString);
        return items;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
//form
var form = document.getElementById("theForm");
//change form
var change = document.querySelector("#change");
//form reaviling button
var revealBtn = document.getElementById("formBtn");
