const mainform = document.querySelector("form")as HTMLFormElement;

function getRandomForm(ev:string | number | any){
   try {
    ev.preventDefault();

    const name:string = ev.target.elements.name.value;
    const address:string = ev.target.elements.name.value;
    const email:string | number = ev.target.elements.name.value;
    const phone:number = ev.target.elements.name.value;
    const password:number | string = ev.target.elements.name.value;
    const precolor:any = ev.target.elements.name.value;
    const file:any = ev.target.elements.name.value;




   } catch (error) {
    console.error(error)
   }
  }