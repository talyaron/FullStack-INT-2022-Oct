const names:Array<string> = ["Orel" , "Yoni"];

// function getArrayFromStorage( name:string ,arr:Array<string>){
//     localStorage.setItem(name , JSON.stringify(arr))
// }

function renderList(elementID:string){
try {
    const dataLocalStorage =  localStorage.getItem("names")
    if(!dataLocalStorage) throw new Error("problem")
    console.log(dataLocalStorage);
    const element = document.querySelector(`#${elementID}`);
      element!.innerHTML = JSON.parse(dataLocalStorage)
        
} catch (error) {
    console.log(error);
}
}

function handleSaveItems(){
    console.log('save items');
    localStorage.setItem('names',JSON.stringify(names));
  }

function handleBeforeLoad(){
   try {
 const names = localStorage.getItem("names")
   } catch (error) {
    console.log(error);
   }
}

function handleSubmitForm(ev){
    ev.preventDefault();
const newText = ev.target.elements.text.value
    names.push(newText)
    //getArrayFromStorage("name" , names)
    console.log(names);
}

