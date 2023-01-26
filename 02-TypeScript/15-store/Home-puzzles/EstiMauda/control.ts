
const form = document.querySelector(".myForm");

function hendleAddDetail(ev) {

  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const address = ev.target.elements.address.value;
    const email = ev.target.elements.email.value;
    const phone = ev.target.elements.phone.valueAsNumber;
    const password = ev.target.elements.password.value;
    const image = ev.target.elements.image.value;


    console.log(`name-${name} address-${address}`)
    details.push(new detail(name, address, email, phone, password, image));
    
    console.log(details)
        
    displayInDom(details)

    
    } catch (error) {
          console.error(error);
  }
}

function displayInDom(details){
    try {
      for(let i=0; i < detailName.length; i++){
        const creatDiv = document.createElement("detailDiv") as HTMLDivElement
        creatDiv.innerHTML = `${detailName[i]}: ${details[i].detailName[i]}`;
        creatDiv.classList.add("creatDiv")
        creatDiv.appendChild(".detail") 
      }


    } catch (error) {
        console.error(error)
    }
}

function hendelChangeColor(ev) {
  try {
    const color = ev.target.value;
    document.body.style.backgroundColor = color;
  } catch (error) {
        console.error(error);
  }
}

function hendelViewPassword(){
    try {
        const passwordElement: any = document.querySelector(".pass");
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
