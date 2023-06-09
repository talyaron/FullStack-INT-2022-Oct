
function handlerAddUser(ev: any) {
    try {
        ev.preventDefault()
        const { fullName, address, email, phone, password } = ev.target.elements
        users.push(new User(fullName.value, address.value, email.value, phone.value, password.value))
        ev.target.reset()
        renderUsers()
    } catch (error) {
        console.log(error);
    }
}

function handleRemoveItem(uid:string){
    try {
        console.log(uid);
    } catch (error) {
        console.log(error);
    }
}

const inputElement = document.getElementById("file");
inputElement!.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files as string;
  console.log(fileList);
}