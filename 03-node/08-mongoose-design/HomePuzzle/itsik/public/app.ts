interface User {
    name: string;
    fname: string;
    phone: number;
    email: string;
    _id?: string;
  }


function handleAddUser(ev: any) {
  
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const fname = ev.target.elements.fname.value;
    const phone = ev.target.elements.phone.value;
    const email = ev.target.elements.email.value;
    const newStudent: any = {name, fname, phone, email}
    console.log(newStudent)
    
    }