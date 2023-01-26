const form = document.querySelector("#theForm");

function handleAddUser(ev:any) {
  try {
    ev.preventDefault();

    console.log(ev);
    const name = ev.target.elements.name.value;
    const adress = ev.target.elements.adress.value;
    const email = ev.target.elements.email.value;
    const phone = ev.target.elements.phone.valueAsNumber;
    const password = ev.target.elements.password.value;
    const preColor = ev.target.elements.preColor.value;
    const image =  ev.target.elements.image.files;
    const confirmPassword = ev.target.elements.confirmPassword.value;


    if(confirmPassword == password){
    users.push(new user(name, adress, email, phone, password, preColor, image));
    console.log(users);
    console.log(name);
      if(userViewer){
      userViewer.innerHTML += `<div class="wrapper__userViewer__userProfile">
       <img src="${imgUrl}">
       <div class="wrapper__userViewer__userProfile__userText">
           <h1>${name}</h1>
           <p>home adress:${adress} email adress:${email}</p>
           <p>favorite color hex: ${preColor}</p>
         </div>
       </div>`
      }
      ev.target.reset();
    }else{
      alert(`passwords do not match`)
    }
  } catch (error) {
    console.error(error);
  }
}
