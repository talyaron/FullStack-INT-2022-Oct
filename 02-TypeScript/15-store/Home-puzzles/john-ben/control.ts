
const form = document.querySelector("#myForm");

function hendleAddDetail(ev) {

  try {
    ev.preventDefault();

    const name = ev.target.elements.name.value;
    const address = ev.target.elements.address.value;
    const email = ev.target.elements.email.value;
    const phone = ev.target.elements.phone.valueAsNumber;
    const password = ev.target.elements.pass.value;
    const image = ev.target.elements.image.value;


    details.push(new detail(name, address, email, phone, password, image));
    
    console.log(details)
        
      randelDetails()

    
    } catch (error) {
          console.error(error);
  }
}

function randelDetails(){
    try {
      for(let i=0; i<details.length; i++){
        const userDetail = document.querySelector(".detail") as HTMLDivElement
        userDetail.innerHTML+= `<div class="userDiv">Name: ${details[i].name} </div>`
        userDetail.innerHTML+=  `<div class="userDiv">Address: ${details[i].address}</div>`
        userDetail.innerHTML+=  `<div class="userDiv">Email: ${details[i].email}</div>`
        userDetail.innerHTML+=  `<div class="userDiv">Phone: ${details[i].phone}</div>`
        userDetail.innerHTML+=  `<div class="userDiv">Password: ${details[i].password}</div>`
      }
    } catch (error) {
        console.error(error)
    }
}



function hendelViewPassword(){
    try {
        const passwordElement: any = document.querySelector("#pass");
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
          passwordElement.type = "text";
        } else {
          passwordElement.type = "password";
        }
      } catch (error) {
        console.error(error);
      }
    }   
