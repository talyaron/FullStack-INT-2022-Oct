if (document.querySelector(".roommateBtn")) {
    var roommateBtn = document.querySelector(".roommateBtn");
    roommateBtn.addEventListener("click", function () {
        try {
            location.href = ('roommate.html');
        }
        catch (error) {
            console.error(error);
        }
    });
}
if (document.querySelector(".apartmentBtn")) {
    var apartmentBtn = document.querySelector(".apartmentBtn");
    // const apartmentDivs = document.querySelectorAll(".apartmentDiv")
    apartmentBtn.addEventListener("click", function () {
        try {
            location.href = ('apartment.html');
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleShowRoommate(uid) {
    try {
        var indexUid = users.findIndex(function (userUid) { return userUid.uid === uid; });
        if (indexUid === -1)
            throw new Error("The element dont found");
        var html = "<div class=\"detail__box\">\n                    <div class=\"detail__box_containerBtn\">\n                    <botton class=\"profilBtn detail__box__containerBtn__btn\" onclick=\"hendelBtnBackToPage()\">X</botton>    \n                    </div>\n                    <img class=\"detail__box__img\"\n                    src= " + users[indexUid].imgSrc + " alt=\"roommate Img\">\n                    <h4>" + users[indexUid].userName + "</h4>\n                    <p>My address is - " + users[indexUid].address + "</p>\n                    <p>I'm looking in - " + users[indexUid].city + " city</p>\n                    <p>I'm looking in -  " + users[indexUid].area + " area</p>\n                    <p>Animal - " + users[indexUid].animal + "</p>\n                    <p>Smoke - " + users[indexUid].smoke + " </p>\n                    <p>Up to  " + users[indexUid].floor + " floor</p>\n                    <p>Up to " + users[indexUid].rooms + " rooms</p>\n                    <p>Up to  " + users[indexUid].partersNo + " parters</p>\n                    <p>Up to " + users[indexUid].price + " NIS</p>\n                    </div>";
        // console.log(`html ${html}`);
        var element = document.getElementById("details");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
function hendelBtnBackToPage() {
    try {
        // console.log("backPage");
        var elementDitail = document.getElementById("details");
        if (!elementDitail)
            throw new Error("Couldnt find element in the DOM");
        elementDitail.remove();
        location.reload();
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowApartment(uid) {
    try {
        var indexUid = apartmentProfils.findIndex(function (apartmentUid) { return apartmentUid.uid === uid; });
        if (indexUid === -1)
            throw new Error("The element dont found");
        console.log("XXXXXXXX");
        var html = "<div id=\"detailBox\" class=\"detail__box \">\n                    <div class=\"detail__box_containerBtn\">\n                    <button class=\"profilBtn detail__box__containerBtn__btn\" onclick=\"hendelBtnBackToPage()\">X</button>    \n                    <button class=\"profilBtn galleryBtn detail__box__containerBtn__btn\" onclick=\"hendelShowGallery(" + indexUid + ")\" style=\"display:none\">More picture</button>    \n                    </div><br>\n                    <img class=\"detail__box__img\"\n                    src= " + apartmentProfils[indexUid].apartmentImage + " alt=\"roommate Img\">\n                    <h4>" + apartmentProfils[indexUid].city + "</h4>\n                    <p>The address  - " + apartmentProfils[indexUid].address + "</p>\n                    <p>The apartment city - " + apartmentProfils[indexUid].city + " city</p>\n                    <p>The apartment area -  " + apartmentProfils[indexUid].area + " area</p>\n                    <p>Animal - " + apartmentProfils[indexUid].animal + "</p>\n                    <p>Smoke - " + apartmentProfils[indexUid].smoke + " </p>\n                    <p>We live in " + apartmentProfils[indexUid].floor + " floor</p>\n                    <p>We have " + apartmentProfils[indexUid].rooms + " rooms</p>\n                    <p>The number of partners - " + apartmentProfils[indexUid].partersNo + " parters</p>\n                    <p>The price is - " + apartmentProfils[indexUid].price + " NIS</p>\n                    </div>";
        // console.log(`html ${html}`);
        var element = document.getElementById("details");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block";
        if (document.getElementById("containerBox"))
            document.getElementById("containerBox").style.opacity = "0.6";
        if (document.getElementById("containerApartment"))
            document.getElementById("containerApartment").style.opacity = "0.6";
    }
    catch (error) {
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
