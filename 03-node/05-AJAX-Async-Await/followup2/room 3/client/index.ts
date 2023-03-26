interface User {
    name: string;
    src: string;
  }


function handleUsers (){
    console.log("test");
    try {
        fetch("/api/getUsers")
        .then((res)=> res.json())
        .then(({ users })=>{
            try {
                if(!users) throw new Error("didnt found users");
                console.log(users);
                renderUserList(users)
            } catch (error) {
                console.error(error)
            }
        })
    } catch (error) {
        console.error(error)
    }
}



function renderUserList(users:User[]){
try {
    if(!users) throw new Error("no users found");

    const html = users.map((user)=>{
        return `<div class="userCard">
        <img src ="${user.src}" alt="user name is ${user.name}"/>
        <p> ${user.name}</p>
        </div>`;
    })
    .join(" ");
    const userElements = document.querySelector("#users");
    console.log(userElements);
    if(!userElements) throw new Error("coulds find users element in dom");

    userElements.innerHTML = html;
} catch (error) {
    console.error(error);
}
}

function handelAdd(ev: any){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const src =  ev.target.elements.src.value;
        if(!name) throw new Error("no name");
        if(!src) throw new Error("No src");
        const newUser: any = {name, src};
        fetch("/api/add-userdetils", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error) => {
        console.error(error);
        });

    } catch (error) {
        console.error(error);
    }
}