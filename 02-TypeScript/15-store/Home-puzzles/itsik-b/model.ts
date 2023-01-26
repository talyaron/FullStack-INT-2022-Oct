const mainform = document.querySelector("form")as HTMLFormElement;

function userSubmit(ev:string | number | any){
   try {
    ev.preventDefault();

    const name:string = ev.target.elements.name.value;
    const address:string = ev.target.elements.name.value;
    const email:string | number = ev.target.elements.name.value;
    const phone:number = ev.target.elements.name.value;
    const password:number | string = ev.target.elements.name.value;
    const precolor:any = ev.target.elements.name.value;
    const file:any = ev.target.elements.name.value;

     userInfo.push(new formUser(name, address, email, phone, password, precolor, file));
      console.log(userInfo)
      ev.target.reset();
   } catch (error) {
    console.error(error)
   }
  }