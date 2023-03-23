
let userFromStorg =  window.localStorage.getItem('UserProfilList')
// console.log(userFromStorg);

if(userFromStorg != null){
    const userArray = JSON.parse(userFromStorg)
    
        userArray.forEach(userArrays => {
            let newUser:User = new User(userArrays.userName, "123");

            newUser.setDetails({
            address: userArrays.address,
            // tel: "03111111111",
            // eMail: "1234@gmail.com",
            city: userArrays.city,
            area: userArrays.area,
            animal: userArrays.animal,
            smoke: userArrays.smoke,
            floor: userArrays.floor,
            rooms: userArrays.rooms,
            partersNo: userArrays.partersNo,
            price: userArrays.price,
            imgSrc: userArrays.imgSrc,
            
            })

    users.push(newUser)

        })
}


// console.log(users.length);

let indexEnd = 8
let indexPage = 0
let endPage = false

if(users.length < 9)
    indexEnd = users.length

renderRoommate(0, indexEnd)

function hendleRoommateBackPage(){
    try{
        indexPage--
        if(indexPage < 0) indexPage = 0
        chekPage()
    } catch (error) {
    console.error(error)        
    }
}

function hendleRoommateNextPage(){
    try {
        if(!endPage) indexPage++
        chekPage()
            
    } catch (error) {
        console.error(error)        
    }
}


function chekPage():void{
    try {
        if(!users) throw new Error("The array is empty")
        endPage = false
        indexEnd = ((indexPage * 8) + 8)

        if(users.length < indexEnd)    indexEnd = users.length
        // console.log(`indexpage - ${indexPage} indexEnd - ${indexEnd}`)
        
        if(indexPage * 8 < indexEnd){
          renderRoommate(((indexPage) * 8) ,indexEnd)
          
        }else{
            endPage = true
            indexPage--
        } 
   
    } catch (error) {
        console.error(error)
    }
}
