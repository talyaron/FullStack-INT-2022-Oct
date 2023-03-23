
const regSubmitButton = document.querySelector("#myButton");

if (regSubmitButton) {
  regSubmitButton.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const _name = document.querySelector("#name") as HTMLInputElement;
    const _email = document.querySelector("#email") as HTMLInputElement;
    const _tel = document.querySelector("#tel") as HTMLInputElement;
    const _username = document.querySelector("#username") as HTMLInputElement;
    const _password = document.querySelector("#password") as HTMLInputElement;
    
    const _newUser: User = new User(_username.value, _password.value);

    _newUser.setDetails({
      name: _name.value,
      tel: _tel.value,
      eMail: _email.value,

    });
    let userFromStorg =  window.localStorage.getItem('registraionNewUsers')


if(userFromStorg != null){
  registraionNewUsers.push(JSON.parse(userFromStorg))
}
     
    // if(registraionNewUsers){
      registraionNewUsers.push(_newUser);
    
    localStorage.setItem("registraionNewUsers", JSON.stringify(registraionNewUsers));
    console.log(registraionNewUsers)
    // }
  });

  regSubmitButton.addEventListener("click", function () {
    window.location.assign("../homepage/homepage.html");
  });
}


// if (submitButton) {
//     submitButton.addEventListener("click", (e: Event) => {
//       e.preventDefault();

//     let newUser:User = new User(nameInput.value, "123");

//     newUser.setDetails({
//         name: nameInput.value,
//         address: adressInput.value,
//         city: cityInput.value,
//         area: areaInput.value,
//         animal: animalInput.value,
//         smoke: smokeInput.value,
//         floor: floorInput.value,
//         rooms: roomsInput.value,
//         partersNo: partersNoInput.value,
//         price: priceInput.value,
//         imgSrc: imgSrcInput.value,
//     })

//     users.push(newUser)
       
//     UserProfilList.push(newUser);
//       localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
//       nameInput.value = "";
//       adressInput.value = "";
//       cityInput.value = "";
//       areaInput.value = "";
//       animalInput.value = "";
//       smokeInput.value = "";
//       floorInput.value = "";
//       roomsInput.value = "";
//       partersNoInput.value = "";
//       priceInput.value = "";
//       imgSrcInput.value = "";


//     });

//     submitButton.addEventListener("click", function() {
//         window.location.assign('../homepage/homepage.html');
//     });
//   }
