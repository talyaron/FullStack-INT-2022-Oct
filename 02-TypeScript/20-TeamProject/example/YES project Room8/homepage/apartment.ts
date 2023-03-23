
// renderApartment()

// const apartmentPageDivs = document.querySelectorAll(".apartmentDiv")

// apartmentPageDivs.forEach((apartmentPageDiv) =>{
//     apartmentPageDiv.addEventListener("click", () => {
//         handleShowAapartment(apartmentPageDiv.innerHTML)
//     })
// })

let apartmentFromStorg:any =  window.localStorage.getItem('ApartmentList')
    
if(apartmentFromStorg != null){
    const apartmentArray = JSON.parse(apartmentFromStorg)
    console.log("apartmentArray.length");
    console.log(apartmentArray.length);
        
        apartmentArray.forEach(apartmentArrays => {
            apartmentProfils.push(
                new ApartmentProfil(
                  apartmentArrays.address,
                  apartmentArrays.city,
                  apartmentArrays.neighbour,
                  apartmentArrays.area,
                  apartmentArrays.animal,
                  apartmentArrays.smoke,
                  apartmentArrays.floor,
                  apartmentArrays.rooms,
                  apartmentArrays.partersNo,
                  apartmentArrays.price,
                  apartmentArrays.apartmentImage,

                ))
            // apartmentProfils.push(apartmentArrays)
                    
        })
   
    }


    
let indexAEnd = 8
let indexAPage = 0
let endAPage = false

if(apartmentProfils.length < 9)
    indexAEnd = apartmentProfils.length

renderApartment(0, indexAEnd)

function hendleapArtmentBackPage(){
    try{
        indexAPage--
        if(indexAPage < 0) indexAPage = 0
        chekPageApartment()
    } catch (error) {
    console.error(error)        
    }
}

function hendleApartmentNextPage(){
    try {
        
        if(!endAPage) indexAPage++
        chekPageApartment()
            
    } catch (error) {
        console.error(error)        
    }
}


function chekPageApartment(){
    try {
        if(!apartmentProfils) throw new Error("The array is empty")
        endAPage = false
        indexAEnd = ((indexAPage * 8) + 8)
        // console.log("apartmentProfils");
        // console.log(apartmentProfils);
        
        if(apartmentProfils.length < indexAEnd)    indexAEnd = apartmentProfils.length
        // console.log(`indexpage - ${indexPage} indexEnd - ${indexEnd}`)
        
        if(indexAPage * 8 < indexAEnd){
            renderApartment((indexAPage * 8) ,indexAEnd)
          
        }else{
            endAPage = true
            indexAPage--
        } 
   
    } catch (error) {
        console.error(error)
    }
}
