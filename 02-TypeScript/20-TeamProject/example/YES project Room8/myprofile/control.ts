  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const adressInput = document.querySelector("#adress") as HTMLInputElement;
  const cityInput = document.querySelector("#city") as HTMLInputElement;
  const areaInput = document.querySelector("#area") as HTMLInputElement;
  const animalInput = document.querySelector("#animal") as HTMLInputElement;
  const smokeInput = document.querySelector("#smoke") as HTMLInputElement;
  const floorInput = document.querySelector("#floor") as HTMLInputElement;
  const roomsInput = document.querySelector("#rooms") as HTMLInputElement;
  const partersNoInput = document.querySelector("#partersNo") as HTMLInputElement;
  const priceInput = document.querySelector("#price") as HTMLInputElement;
  const imgSrcInput = document.querySelector("#imgSrc") as HTMLInputElement;

  const submitButton = document.querySelector("#myButton");
  
  if (submitButton) {
    submitButton.addEventListener("click", (e: Event) => {
      e.preventDefault();

    let newUser:User = new User(nameInput.value, "123");

    newUser.setDetails({
        name: nameInput.value,
        address: adressInput.value,
        city: cityInput.value,
        area: areaInput.value,
        animal: animalInput.value,
        smoke: smokeInput.value,
        floor: floorInput.value,
        rooms: roomsInput.value,
        partersNo: partersNoInput.value,
        price: priceInput.value,
        imgSrc: imgSrcInput.value,
    })

    users.push(newUser)
       
    UserProfilList.push(newUser);
      localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
      nameInput.value = "";
      adressInput.value = "";
      cityInput.value = "";
      areaInput.value = "";
      animalInput.value = "";
      smokeInput.value = "";
      floorInput.value = "";
      roomsInput.value = "";
      partersNoInput.value = "";
      priceInput.value = "";
      imgSrcInput.value = "";


    });

    submitButton.addEventListener("click", function() {
        window.location.assign('../homepage/homepage.html');
    });
  }
  
  // retrieve data from local storage
  const storedData = localStorage.getItem("UserProfilList");

  // console.log("storedData")
  // console.log(storedData)
  
  if (storedData) {
    UserProfilList = JSON.parse(storedData);
  }