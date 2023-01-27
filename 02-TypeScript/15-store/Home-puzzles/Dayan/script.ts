//-----Class
class Profile{
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public password: string | number,
        public image: string,
        public gender: string
    ){}
}

const profile:Profile[] = []

//-----Script
const form = document.querySelector("form")

function hendleAddDetail(event){
    try{
        event.preventDefault()

        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const phone = event.target.elements.phone.value
        const password = event.target.elements.password.value
        const image = event.target.elements.image.value
        const gender = event.target.elements.gender.value

        profile.push(new Profile(name, email, phone, password, image, gender))

        console.log(profile)

        showProfile()

    }catch(error){
        console.error(error)
    }
}

function showProfile(){
    try{

        for(let i = 0; i < profile.length; i++){
            const userProfile = document.querySelector(".profile")!
            userProfile.innerHTML += `<div class ="userProfile"> ${profile[i].name}</div>`
            userProfile.innerHTML += `<div class ="userProfile"> ${profile[i].email}</div>`
            userProfile.innerHTML += `<div class ="userProfile"> ${profile[i].phone}</div>`
            userProfile.innerHTML += `<div class ="userProfile"> ${profile[i].gender}</div>`
            userProfile.innerHTML += `<div class ="userProfile"> ${profile[i].image}</div>`
        }
    }catch (error){
        console.log(error)
    }
}
