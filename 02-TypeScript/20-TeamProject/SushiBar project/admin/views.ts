/**get items storage(admin)
 * @returns Item[] || null
*/
function getItems():Item[]|null {
    try {
        if(!localStorage.getItem("items")) throw new Error("No items");
        const itemsString = localStorage.getItem("items")
        if(!itemsString) throw new Error("Items coulnd not be fount in storage");
        const items:Item[] = JSON.parse(itemsString);
        return items;
    } catch (error) {
        console.error(error);
        return null;
    }
}
//form
const form = document.getElementById("theForm");
//change form
const change = <HTMLElement>document.querySelector("#change");
//form reaviling button
const revealBtn = document.getElementById("formBtn");
