function handleUser(ev:any){
    try {
        ev.preventDefault();
        const name:string = ev.target.elements.name.value;
        const adress:string = ev.target.elements.adress.value;
        const email:string = ev.target.elements.email.value;
        const phone:number = ev.target.elements.phone.valueAsNumber;
        const password:number = ev.target.elements.password.valueAsNumber;
        const color:any = ev.target.elements.color.value;
        const img:string = ev.target.elements.img.value;
        ev.target.reset();
        users.push(new User(name, adress, email, phone, password, color))
        console.log(users);
        renderUser()
    } catch (error) {
        console.error(error)
    }
}

