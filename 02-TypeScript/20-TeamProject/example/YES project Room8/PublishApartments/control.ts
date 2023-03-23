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
    
      let apartmentFromStorg =  window.localStorage.getItem('ApartmentList')
        
      if(apartmentFromStorg != null){
          apartmentList = JSON.parse(apartmentFromStorg)
      }
        


      apartmentList.push(
      new ApartmentProfil(
        adressInput.value,
        cityInput.value,
        "",
        areaInput.value,
        animalInput.value,
        smokeInput.value,
        floorInput.value,
        roomsInput.value,
        partersNoInput.value,
        priceInput.value,
        imgSrcInput.value,
      )
    );


    console.log("apartmentList");
    console.log(apartmentList.length);

      localStorage.setItem("ApartmentList", JSON.stringify(apartmentList));
      // nameInput.value = "";
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

  if(submitButton)
    submitButton.addEventListener("click", function() {
        window.location.assign('../homepage/homepage.html');
    });
  
  
  // retrieve data from local storage
  const storedData = localStorage.getItem("ApartmentList");

  // console.log("storedData")
  // console.log(storedData)
  
  if (storedData) {
    UserProfilList = JSON.parse(storedData);
  }
}