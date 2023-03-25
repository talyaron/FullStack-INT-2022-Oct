var homepageName = "homepage";
renderRoommate(users.length - 4, users.length);
renderApartment(apartmentProfils.length - 3, apartmentProfils.length);
var indexArray = 0;
var roommateBtnHomepage = document.querySelector(".roommateBtn");
var apartmentBtnHomepage = document.querySelector(".apartmentBtn");
var roommateDivsHomepage = document.querySelectorAll(".roommateDiv");
var apartmentDivsHomepage = document.querySelectorAll(".apartmentDiv");
// apartmentDivsHomepage.forEach((apartmentDivHomepage) =>{
//     apartmentDivHomepage.addEventListener("click", () => {
//         handleShowAapartment(apartmentDivHomepage.innerHTML)
//     })
// })
