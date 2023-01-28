form1.addEventListener('submit', (ev:any)=> {
    ev.preventDefault();
    console.log(ev);
    try {

        const name = ev.target.elements.name.value;
        const address = ev.target.elements.address.value;
        const phone = ev.target.elements.phone.value;
        const email = ev.target.elements.email.value;
        const color = ev.target.elements.color.value;
        const password = ev.target.elements.password.value;

        users.push(new User(name, address, email, phone, color, password));
        ev.target.reset()
        console.log(users);
        
        const div = document.createElement("div");
        div.className = "allUsers__user";
        const h2 = document.createElement("h2");
        h2.innerText = `Name: ${name}`;
        const addressP = document.createElement("p");
        addressP.innerText = `Address: ${address}`;
        const emailP = document.createElement("p");
        emailP.innerText = `Email: ${email}`;
        const phoneP = document.createElement("p");
        phoneP.innerText = `Phone: ${phone}`;
        const colorP = document.createElement("p");
        colorP.innerText = `Color: ${color}`;
        div.appendChild(h2);
        div.appendChild(addressP);
        div.appendChild(emailP);
        div.appendChild(phoneP);
        div.appendChild(colorP);
        allUsers.appendChild(div);
        
    } catch (error) {
        console.error(Error);
    }
    

})

show.addEventListener('click', ()=> {
    allUsers.style.display = "block"
})