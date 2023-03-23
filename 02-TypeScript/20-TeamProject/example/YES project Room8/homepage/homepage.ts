
const homepageName = "homepage"

renderRoommate(users.length-4 ,users.length)
renderApartment(apartmentProfils.length-3 ,apartmentProfils.length)

let indexArray = 0


const roommateBtnHomepage = document.querySelector(".roommateBtn") as HTMLButtonElement
const apartmentBtnHomepage = document.querySelector(".apartmentBtn") as HTMLButtonElement
const roommateDivsHomepage = document.querySelectorAll(".roommateDiv") 
const apartmentDivsHomepage = document.querySelectorAll(".apartmentDiv")



// apartmentDivsHomepage.forEach((apartmentDivHomepage) =>{
//     apartmentDivHomepage.addEventListener("click", () => {
//         handleShowAapartment(apartmentDivHomepage.innerHTML)

//     })
// })



