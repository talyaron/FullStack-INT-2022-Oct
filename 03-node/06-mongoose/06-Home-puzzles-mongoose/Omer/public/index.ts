
window.addEventListener('load', () => getUsers())
class User {
    public _id: string;
    constructor(public name: string, public email: string) { }
}
async function formHandler(ev: any) {
    ev.preventDefault();
    console.log(ev);

    const name = ev.target.elements.name.value;
    const email = ev.target.elements.email.value;
    ev.target.reset();
    try {
        fetch("/api-add-user", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        })
            .then((res) => res.json())
            .then((allUsers) => {
                console.log("Success");
                renderUsers(allUsers)
            });

    } catch (error) {
        console.error("Error:", error);
    }
}

function getUsers() {
    fetch("/api-get-users")
        .then((response) => response.json())
        .then((allUsers) => {
            renderUsers(allUsers);
        });
}

function renderUsers(users: User[]) {
    try {
        const display = document.getElementById("display")
        const html = users.map((user) => {
            return `
            <h2>${user.name}</h2>
            <h3>${user.email}</h3>
            <button onclick="deleteUser('${user._id}')">Delete</button>
            <a href="#updateForm"><button onclick="updateUser('${user.name}', '${user.email}', '${user._id}')">Update</button></a>
        `
        }).join(" ")
        if (!display) throw new Error("display not found");

        display.innerHTML = html
    } catch (error) {
        console.error(error);

    }
}

function updateUser(name: string, email: string, _id: string) {
    try {        
        const form = document.getElementById("updateForm");
        const html = `
        <form onsubmit="updateUserHelper(event,'${name}', '${email}', '${_id}')">
            <input type="text" name="name" placeholder="${name}">
            <input type="email" name="email" placeholder="${email}">
            <a href="#top"><input type="submit" value="Send/Dismiss"></a>
        </form>
        `;
        if(!form) throw new Error("updateForm not found");
        form.innerHTML = html;
    } catch (error) {
        console.error("Error:", error);
    }
}

function updateUserHelper(ev: any, name: string, email: string, _id: string) {
    try {
        console.log("hello");
        ev.preventDefault();
        
        let newName = ev.target.elements.name.value;
        let newEmail = ev.target.elements.email.value;
        if(newName == "") newName = name;
        if(newEmail == "") newEmail = email;
        console.log(newName + " " + newEmail);
        
        const form = document.getElementById("updateForm");
        if(!form) throw new Error("updateForm not found");
        form.innerHTML = "";
        console.log(ev);

        ev.target.reset();
        fetch("/api-update", {
            method: "PATCH", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:newName, email:newEmail, _id:_id }),
        })
            .then((res) => res.json())
            .then((allUsers) => {
                console.log("Success");
                renderUsers(allUsers)
            });
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteUser(_id: string) {
    try {
        fetch("/api-delete", {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id }),
        }).then((res) => res.json())
            .then((allUsers) => {
                console.log("Success");
                renderUsers(allUsers as User[])
            });

    } catch (error) {
        console.error("Error:", error);
    }
}