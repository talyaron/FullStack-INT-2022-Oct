//----- Class
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

//----- Script
const form = document.querySelector("form") as HTMLFormElement
const userProfile = document.querySelector(".profile") as HTMLElement

//----- Event listener
function hendleAddDetail(event){
    try{

        event.preventDefault()

        //----- Creat new div
        const user = document.createElement("div") as HTMLDivElement
        userProfile.appendChild(user)
        user.classList.add("user")

        //----- Display the image on the page
        const userImage = form.querySelector("#user-image") as HTMLInputElement
        const file = userImage.files[0]
        
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            const img = document.createElement("img")
            img.src = reader.result as string
            user.appendChild(img)
        }

        //----- Get values from the elements
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const phone = event.target.elements.phone.value
        const password = event.target.elements.password.value
        const image = event.target.elements.image.value
        const gender = event.target.elements.gender.value

        profile.push(new Profile(name, email, phone, password, image, gender))

        console.log(profile)

        //----- Document profile on DOM
        user.innerHTML += `<p>${name} <br> ${email} <br> ${phone} <br> ${gender}</p>`

    }catch(error){
        console.error(error)
    }
}

