
 function handlDetails(ev:any){
    try {
        ev.preventDefault();

    const fullName = ev.target.fullname.value;
    const email=ev.target.email.value;
    const url= ev.target.Url.value;
    const password=ev.target.password.value;
    const color=ev.target.color.value;


    arrayOfUsers.push(new UserDetail(fullName,email,url,password,color))
    console.log(container);
    
    if(!container)throw new Error("container variable is empty")
    container.innerHTML= render(arrayOfUsers)
    
    
    
    
    
        
    } catch (error) {
        console.error(error);
        
    }
 }

 function render(users:UserDetail[]):string{
    try {
        if(!arrayOfUsers)throw new Error("you don't insert a variable")
        const html = users.map((user)=>{
            return `<div class="item" style="background-color:${user.color}">
            <h3>${user.fullName}</h3>
            <div>Email: ${user.email} </div>
            <div><img src=" ${user.url}"></div>
            <div>Password: ${user.password}</div>
            <div>Color: ${user.color}</div>
            <button onclick="handleDeleteItem('${user.uid}')">Remove</button>
          </div>
          `
        }).join(" ");
        return html

    } catch (error) {
        console.error(error)
    }
 }

