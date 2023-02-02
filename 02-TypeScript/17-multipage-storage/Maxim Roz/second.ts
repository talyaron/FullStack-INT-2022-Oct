const addToArray = document.querySelector("#input") as HTMLInputElement




const addBtn: HTMLElement|null = document.querySelector("form")!;

  addBtn.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("function works");
    console.log(addToArray.value);
    items.push(addToArray.value)
    console.log(items);
    renderOnDom()
    
    
  });
  function renderOnDom(){
    const rootItems= document.querySelector("#rootItems")!
    rootItems.textContent= items

  }

  
 
 