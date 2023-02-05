//-----Login Script-----//
const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})

function focusFunc(){
    let parent = this.parentNode.parentNode
    parent.classList.add('focus')
}

function blurFunc(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove('focus')
    }
    
}

//----- Event listener
const form = document.querySelector("form") as HTMLFormElement
const userName = document.querySelector("#username") as HTMLInputElement
const userPassword = document.querySelector("#password") as HTMLInputElement

function handleSubmit(event){
    try{
        event.preventDefault()

        //----- Get values from the elements
        const { username, password } = event.target.elements

        if(username.value == ""){
            alert("Please enter your username")
        }
        if(password.value == ""){
            alert("Please enter your password")
        }
        if(checkUserDetails(userName.value, userPassword.value) == false){
            alert("Incorrect username or password")
            
        }
        else{
            event.target.reset()

            return location.href = './userProfile.html'
        }
    }catch(error){
        console.error(error)
    }
}

//----- Check user's details
function getDataFromStorage(){
    try{  
        //----- Get Data from Storage
        const dataString = localStorage.getItem("users") as string
        // if(!dataString) throw new Error ("Couldn't find data in storage")

        //----- Convert to array
        let data = JSON.parse(dataString)
        return data
    }catch(error){
        console.error(error)
        return undefined
    }
}

function checkUserDetails(username:string, password:string | number){
    try{
        let data = getDataFromStorage()
        for(let i = 0; i < data.length; i++){
            if(username == data[i].username && password == data[i].password){
                return true
            }
        }
        return false
    
    }catch(error){
        console.error(error)
    }
}

