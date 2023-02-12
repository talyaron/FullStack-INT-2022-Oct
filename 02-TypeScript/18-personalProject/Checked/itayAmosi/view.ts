const container: any = document.querySelector(`.container`);
const itemsRoot = document.querySelector('#itemsRoot');


const contWidth = container.offsetWidth;
const contHeight = container.offsetHeight;

const form = document.getElementById("form");


function getItemsFromStorage(): User[]|undefined{
    try {
        const usersString= localStorage.getItem("users");
        if(!usersString)throw new Error(`cant find`);

        const users= JSON.parse(usersString);
        return users;

    } catch (error) {
        console.error(error)
        return undefined;
    }
}