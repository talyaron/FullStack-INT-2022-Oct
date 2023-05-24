function handleDetails(ev) {
  try {
    ev.preventDefault();

    console.dir(ev);
    const name:string = ev.target.elements.name;
    const address:string = ev.target.elements.address.value;
    const email:string = ev.target.elements.email.value;
    const phone:number = ev.target.elements.phone.value;
    const password:string = ev.target.elements.password.value;
    const color:string = ev.target.elements.color.value;
    const img:string = ev.target.elements.img;
    const id:number = arrayOfUsers.length===undefined?0:arrayOfUsers.length;
    if(id && name && address && email && phone &&password && color && img)
    arrayOfUsers.push(
      new UserDetails(id, name, address, email, phone, password, color, img));
      console.log(arrayOfUsers);
      
      renderDetails()
  } catch (error) {
    console.error(error);
    return false
  }}

function renderDetails() {
  try {
    // ev.preventDefault();
    const currentIndexArray=arrayOfUsers.length - 1
    const card = `<div class="userDetailsCard" id="userInput${
        arrayOfUsers[currentIndexArray].id}">
        <p>name: ${arrayOfUsers[currentIndexArray].name}</p><br>
        <p>address: ${arrayOfUsers[currentIndexArray].address}</p><br>
        <p>email: ${arrayOfUsers[currentIndexArray].email}</p> <br>
        <p>phone: ${arrayOfUsers[currentIndexArray].phone}</p><br>
        <p>password: ${arrayOfUsers[currentIndexArray].password}</p><br>
        <p>color: ${arrayOfUsers[currentIndexArray].color}</p><br>
        <img src="${arrayOfUsers[currentIndexArray].img}"</div>`;
    if (containerOfDetails) {
      containerOfDetails.innerHTML = card;
    }
  } catch (error) {
    console.error(error);
  }
}
function handleChangerColor(ev) {
  try {
    console.log(ev);
    const color = ev.target.value;
    document.body.style.backgroundColor = color;
  } catch (error) {
    console.error(error);
    return false
  }
}
