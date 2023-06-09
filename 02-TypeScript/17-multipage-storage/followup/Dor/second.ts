const html:any = document.querySelector(".rootItems") as HTMLDivElement;

function handleArray (ev: any){
    try {
        ev.preventDefault()
        const string = ev.target.elements.text.value;
        items.push (new item (string))
        ev.target.reset();
        return items
        
    } catch (error) {
        console.error(error);
        
    }
}

console.log(items);

function renderArray(items){
try {
  html.innerHTML = `<h3>${items}</h3>`
} catch (error) {
    console.error(error);
    
}
}

function saveItems(){
    localStorage.setItem ("items" ,JSON.stringify(items))
}