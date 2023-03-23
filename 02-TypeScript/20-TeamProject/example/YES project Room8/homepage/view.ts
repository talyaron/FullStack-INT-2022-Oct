
function renderRoommate(indexStart:number, indexEnd:number):void{
    try {
        if (!User || !Array.isArray(users))
          throw new Error("Items is not an array");
        
        let tempUserProfiles:User[] = []
        
        // console.log(`indexStart ${indexStart} indexEnd ${indexEnd}`);
        
        for(let i = indexStart; i < indexEnd; i++){
            tempUserProfiles.push(users[i])
          }
        // console.log('tempUserProfiles');
        // console.log(tempUserProfiles);
        
          
        const html = tempUserProfiles
           .map((users) => {
            return `
            <div class="boxMain__container__boxes roommateDiv roommatePage__container"  onclick="handleShowRoommate('${users.uid}')">
            <img class="boxMain__container__boxes__img"
             src= ${users.imgSrc} alt="roommate Img">
            <h4>${users.userName}</h4>
            <p>Area: ${users.area}</p>
            <p>Rooms: up to ${users.rooms}</p>
            <p>floor: up to ${users.floor}</p>
            </div>
            `;
          })
          .join(" ");
        console.log(`html ${html}`);
        const element = document.querySelector(".roommate");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;

      } catch (error) {
        console.error(error);
      }
}

function renderApartment(indexStart:number, indexEnd:number):void{
    try {
        if (!ApartmentProfil || !Array.isArray(apartmentProfils))
          throw new Error("Items is not an array");

          let tempApartmentProfiles:ApartmentProfil[] = []

          for(let i = indexStart; i < indexEnd; i++){
            tempApartmentProfiles.push(apartmentProfils[i])
          }
      
        const html = tempApartmentProfiles
           .map((apartments) => {
            return `
            <div class="boxMain__container__boxes apartmentDiv apartment__container" onclick="handleShowApartment('${apartments.uid}')">
            <img class="boxMain__container__boxes__img"
             src= ${apartments.apartmentImage} alt="roommate Img">
            <h4>${apartments.city}</h4>
            <p>Rooms: ${apartments.rooms}</p>
            <p>Floor: ${apartments.floor}</p>
            <p>Price: ${apartments.price} NIS</p>
            </div>
            `;
          })
          .join(" ");
        // console.log(`htmlApartments ${html}`);
        const element = document.querySelector(".apartments");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
      } catch (error) {
        console.error(error);
      }
}

