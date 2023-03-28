interface User {
    name: string;
    img: string;
}

function formHandler(ev: any) {
    ev.preventDefault();
    try {
        const name = ev.target.elements.name.value;
        const img = ev.target.elements.img.value;
        const newUser:any = { name, img };
        console.log(newUser);
        
        ev.target.reset()

        fetch("/api-data", {
            method: "POST",
            headers: {
            //   'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
            

        getUsers();
    } catch (error) {
        console.error(error);
    }
}

function getUsers() {
    try {
        fetch("/api-users")
            .then((response) => response.json())
            .then(({ data }) => {
                try {
                    // if (!data) throw new Error("didn't find users");
                    console.log("Data at getUser()");

                    console.log(data);
                    renderUser(data);
                } catch (error) {
                    console.error(error);
                }
            });
    } catch (error) {
        console.error(error);
    }
}

function renderUser(users: User[]) {
    console.log("render");
    const display = document.getElementById("users");
    try {
        if (!display) throw new Error("Display not found");
        const html = users
            .map((user) => {
                return `<div class="userCard">
            <img src="${user.img}" alt="user name is ${user.name}">
            <p>${user.name}</p>
            </div>`;
            })
            .join(" ");
        display.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}