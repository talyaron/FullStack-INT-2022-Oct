function renderUser{
    try {
        for(let i=0; i<users.length;i++){
        const root = document.querySelector(".root") as HTMLDivElement;
        root.innerHTML+= `<div class="userDiv">Name:${users[i].name}</div>`
        root.innerHTML+= `<div class="userDiv">Adress:${users[i].adress}</div>`
        root.innerHTML+= `<div class="userDiv">Email:${users[i].email}</div>`
        root.innerHTML+= `<div class="userDiv">Phone:${users[i].phone}</div>`
        root.innerHTML+= `<img src:"${users[i].img}">`
        root.innerHTML+= `<div class="userDiv">Favorite Color:${users[i].color}</div>`
    }
    } catch (error) {
        console.error(error);
        
    }
}