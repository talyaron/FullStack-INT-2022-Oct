function dataOnDomUrl(){
    const box1 = document.querySelector(".box1")!
    const data = document.querySelector(".userDataWrapperUrl")!
    const name =document.querySelector(".nameDom")!
    const adress =document.querySelector(".addrDom")!
    const email =document.querySelector(".emailDom")!
    const phone =document.querySelector(".phoneDom")!
    const password =document.querySelector(".passDom")!
    const color =document.querySelector(".colorDom")!
    const image =document.querySelector("#imgUrl")!
    name.textContent = "Name: " + users[0].name
    adress.textContent = "Adress: " + users[0].adress
    email.textContent = "Email: " + users[0].email
    phone.textContent = "Phone: " + users[0].phone
    password.textContent = "Password: " + users[0].password
    image.src =  users[0].image
    data.style.visibility = "visible"
    box1.style.backgroundColor = users[0].color
}


function dataOnDom(){
    const box2 = document.querySelector(".box2")!
    const data = document.querySelector(".userDataWrapperLocal")!
    const name =document.querySelector(".nameOnDom")!
    const adress =document.querySelector(".adressOnDom")!
    const email =document.querySelector(".emailOnDom")!
    const phone =document.querySelector(".phoneOnDom")!
    const password =document.querySelector(".passwordOnDom")!
    const color =document.querySelector(".colorOnDom")!
    const image:any =document.querySelector(".imageOnDom")!
    const img = document.createElement("img")as HTMLImageElement
    name.textContent = "Name: " + usersLocalImg[0].name
    adress.textContent = "Adress: " + usersLocalImg[0].adress
    email.textContent = "Email: " + usersLocalImg[0].email
    phone.textContent = "Phone: " + usersLocalImg[0].phone
    password.textContent = "Password: " + usersLocalImg[0].password
    img.src =  usersLocalImg[0].image
    data.style.visibility = "visible"
    box2.style.backgroundColor = usersLocalImg[0].color
    ;
    
    
}