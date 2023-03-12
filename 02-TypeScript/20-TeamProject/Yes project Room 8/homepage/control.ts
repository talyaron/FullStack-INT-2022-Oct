
if(document.querySelector(".roommateBtn")){
    const roommateBtn = document.querySelector(".roommateBtn") as HTMLButtonElement
    roommateBtn.addEventListener("click",() =>{
        try {
            location.href = ('roommate.html')
        } catch (error) {
            console.error(error)        
        }
    })
}

if(document.querySelector(".apartmentBtn")){
    const apartmentBtn = document.querySelector(".apartmentBtn") as HTMLButtonElement
    // const apartmentDivs = document.querySelectorAll(".apartmentDiv")
    apartmentBtn.addEventListener("click",() =>{
        try {
            location.href = ('apartment.html')
            
        } catch (error) {
            console.error(error)        
        }
    })
}

function handleShowRoommate(uid:string) : void{
    try{
           const indexUid = users.findIndex(userUid => userUid.uid === uid);
            if (indexUid === -1) throw new Error("The element dont found")
              
            const html =    
                    `<div class="detail__box">
                    <div class="detail__box_containerBtn">
                    <botton class="profilBtn detail__box__containerBtn__btn" onclick="hendelBtnBackToPage()">X</botton>    
                    </div>
                    <img class="detail__box__img"
                    src= ${users[indexUid].imgSrc} alt="roommate Img">
                    <h4>${users[indexUid].userName}</h4>
                    <p>My address is - ${users[indexUid].address}</p>
                    <p>I'm looking in - ${users[indexUid].city} city</p>
                    <p>I'm looking in -  ${users[indexUid].area} area</p>
                    <p>Animal - ${users[indexUid].animal}</p>
                    <p>Smoke - ${users[indexUid].smoke} </p>
                    <p>Up to  ${users[indexUid].floor} floor</p>
                    <p>Up to ${users[indexUid].rooms} rooms</p>
                    <p>Up to  ${users[indexUid].partersNo} parters</p>
                    <p>Up to ${users[indexUid].price} NIS</p>
                    </div>`;
        
        // console.log(`html ${html}`);
        const element = document.getElementById("details");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block"
            
        

    } catch (error) {
        console.error(error);
    }
}

function hendelBtnBackToPage(){
    try {
        // console.log("backPage");
        
        const elementDitail = document.getElementById("details");
        if (!elementDitail) throw new Error("Couldnt find element in the DOM");
        elementDitail.remove()
        location.reload()
       
    } catch (error) {
        console.error(error)
    }
}

function handleShowApartment(uid:string): void{
    try{
        const indexUid = apartmentProfils.findIndex(apartmentUid => apartmentUid.uid === uid);
        if (indexUid === -1) throw new Error("The element dont found")
        console.log("XXXXXXXX");
        
            const html = 
                    `<div id="detailBox" class="detail__box ">
                    <div class="detail__box_containerBtn">
                    <button class="profilBtn detail__box__containerBtn__btn" onclick="hendelBtnBackToPage()">X</button>    
                    <button class="profilBtn galleryBtn detail__box__containerBtn__btn" onclick="hendelShowGallery(${indexUid})" style="display:none">More picture</button>    
                    </div><br>
                    <img class="detail__box__img"
                    src= ${apartmentProfils[indexUid].apartmentImage} alt="roommate Img">
                    <h4>${apartmentProfils[indexUid].city}</h4>
                    <p>The address  - ${apartmentProfils[indexUid].address}</p>
                    <p>The apartment city - ${apartmentProfils[indexUid].city} city</p>
                    <p>The apartment area -  ${apartmentProfils[indexUid].area} area</p>
                    <p>Animal - ${apartmentProfils[indexUid].animal}</p>
                    <p>Smoke - ${apartmentProfils[indexUid].smoke} </p>
                    <p>We live in ${apartmentProfils[indexUid].floor} floor</p>
                    <p>We have ${apartmentProfils[indexUid].rooms} rooms</p>
                    <p>The number of parters - ${apartmentProfils[indexUid].partersNo} parters</p>
                    <p>The price is - ${apartmentProfils[indexUid].price} NIS</p>
                    </div>`;
        
        // console.log(`html ${html}`);
        const element = document.getElementById("details");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block"
        if(document.getElementById("containerBox"))
            document.getElementById("containerBox")!.style.opacity = "0.6"
        if(document.getElementById("containerApartment"))
            document.getElementById("containerApartment")!.style.opacity = "0.6"
    
    } catch (error) {
    console.error(error);   
    }
}

// function hendelShowGallery(index:number): void{
//     try {
        
//         const html = 
//         `<div id="detailBox" class="detail__box ">
//         <div class="detail__box_containerBtn">
//             <button class="profilBtn exitBtn detail__box__containerBtn__btn" onclick="handleShowAapartment('${apartmentProfils[index].apartmentName}')">X</button>
//             <button class="profilBtn backBtn detail__box__containerBtn__btn" onclick="hendelBtnBackImage(${index})"><</botton>
//             <button class="profilBtn NextBtn detail__box__containerBtn__btn" onclick="hendelBtnNextImage(${index})">></button>    
//         </div><br>
//             <img class="detail__box__img apartmentImage"
//             src= ${apartmentProfils[index].apartmentImages[0].urlPicture} alt="roommate Img">
//         </div>`;

//         const element = document.getElementById("details");
//         if (!element) throw new Error("Couldnt find element in the DOM");
//         element.innerHTML = html;
//         element.style.display = "block"
//         if(document.getElementById("containerBox"))
//             document.getElementById("containerBox")!.style.opacity = "0.6"
//         if(document.getElementById("containerApartment"))
//             document.getElementById("containerApartment")!.style.opacity = "0.6"
//         indexArray = 0
        
//     } catch (error) {
//         console.error(error)
//     }
   
// }

// function hendelBtnBackImage(index:number): void{
//     try {
//         const element = document.querySelector(".apartmentImage") 
        
//         if (!element) throw new Error("Couldnt find element in the DOM");        
//             if(indexArray === 0) {
//                 indexArray = apartmentProfils[index].apartmentImage.length - 1
//             }else{
//                 indexArray--
//            }
//         element.src = apartmentProfils[index].apartmentImage     

//     } catch (error) {
//         console.error(error)
//     }
// }

// function hendelBtnNextImage(index:number): void{
//     try {
//         const element = document.querySelector(".apartmentImage") 
        
//         if (!element) throw new Error("Couldnt find element in the DOM");        
 
//         indexArray++
            
//         if(indexArray === apartmentProfils[index].apartmentImages.length) 
//             indexArray = 0

//          element.src = apartmentProfils[index].apartmentImages[indexArray].urlPicture     
       
//     } catch (error) {
//         console.error(error)
//     }

// }

