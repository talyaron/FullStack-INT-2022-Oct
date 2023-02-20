

 const imag: HTMLDivElement |null  = document.querySelector(".imag");
class UsersPhoto{
    constructor(public PhotoAddress:String){}
}


function pushToArrayPhoto(){
    try {
        const arrayPhoto:Array <UsersPhoto>=[];
        for(let i=0; i< 5 ;i++){
    let PhotoAddress=prompt("enter a photo address please")
    if(PhotoAddress&&imag){
        const userPhoto=new UsersPhoto(PhotoAddress)
        arrayPhoto.push(userPhoto)
        imag.innerHTML+=`<img src='${arrayPhoto[i].PhotoAddress}'/>`
        
        }
        else{
            alert("you did not enter a photo address")
        }
    }
    } catch (error) {
        console.error(error)
        return false
        
    }
   }
pushToArrayPhoto()












