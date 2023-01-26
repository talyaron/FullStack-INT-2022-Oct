function handleAddUserData(ev){
    try {
        ev.preventDefault()
        console.log(ev);
        
        const name = ev.target.elements.name.value
        const adress = ev.target.elements.adress.value
        const email = ev.target.elements.email.value
        const phone = ev.target.elements.phone.value
        const password = ev.target.elements.password.value
        const color = ev.target.elements.color.value
        const image = ev.target.elements.image?.value

        usersData.push(new UserData(name,adress,email,phone,password,color,image));


         ev.target.reset()
         console.log(usersData);
         
        
    } catch (error) {
        console.error(error)
        
    }
    
}
function handleAddUserDataAndImageUrl(ev){
    try {
        ev.preventDefault()
        console.log(ev);
        
        const name = ev.target.elements.name.value
        const adress = ev.target.elements.adress.value
        const email = ev.target.elements.email.value
        const phone = ev.target.elements.phone.value
        const password = ev.target.elements.password.value
        const color = ev.target.elements.color.value
        const image = ev.target.elements.image?.value
            users.push(new UserData(name,adress,email,phone,password,color,image));
            dataOnDomUrl()


         ev.target.reset()
         console.log(users);
         
        
    } catch (error) {
        console.error(error)
        
    }
    
}
function handleAddUserDataAndImageLocal(ev){
    try {
        ev.preventDefault()
        
        const name = ev.target.elements.name.value
        const adress = ev.target.elements.adress.value
        const email = ev.target.elements.email.value
        const phone = ev.target.elements.phone.value
        const password = ev.target.elements.password.value
        const color = ev.target.elements.color.value
        const image = ev.target.elements.image.value
        usersLocalImg.push(new UserData(name,adress,email,phone,password,color,image));
        dataOnDom()

         ev.target.reset()
         console.log(usersLocalImg);
         
         
        
    } catch (error) {
        
        console.error(error)
        
        
    }
    
}

