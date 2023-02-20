function dataOnDomUrl() {
    var box1 = document.querySelector(".box1");
    var data = document.querySelector(".userDataWrapperUrl");
    var name = document.querySelector(".nameDom");
    var adress = document.querySelector(".addrDom");
    var email = document.querySelector(".emailDom");
    var phone = document.querySelector(".phoneDom");
    var password = document.querySelector(".passDom");
    var color = document.querySelector(".colorDom");
    var image = document.querySelector("#imgUrl");
    name.textContent = "Name: " + users[0].name;
    adress.textContent = "Adress: " + users[0].adress;
    email.textContent = "Email: " + users[0].email;
    phone.textContent = "Phone: " + users[0].phone;
    password.textContent = "Password: " + users[0].password;
    image.src = users[0].image;
    data.style.visibility = "visible";
    box1.style.backgroundColor = users[0].color;
}
function dataOnDom() {
    var box2 = document.querySelector(".box2");
    var data = document.querySelector(".userDataWrapperLocal");
    var name = document.querySelector(".nameOnDom");
    var adress = document.querySelector(".adressOnDom");
    var email = document.querySelector(".emailOnDom");
    var phone = document.querySelector(".phoneOnDom");
    var password = document.querySelector(".passwordOnDom");
    var color = document.querySelector(".colorOnDom");
    var image = document.querySelector(".imageOnDom");
    var img = document.createElement("img");
    name.textContent = "Name: " + usersLocalImg[0].name;
    adress.textContent = "Adress: " + usersLocalImg[0].adress;
    email.textContent = "Email: " + usersLocalImg[0].email;
    phone.textContent = "Phone: " + usersLocalImg[0].phone;
    password.textContent = "Password: " + usersLocalImg[0].password;
    img.src = usersLocalImg[0].image;
    data.style.visibility = "visible";
    box2.style.backgroundColor = usersLocalImg[0].color;
}
