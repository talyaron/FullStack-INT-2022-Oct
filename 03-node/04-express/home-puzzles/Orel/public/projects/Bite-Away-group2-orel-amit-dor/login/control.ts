// USER SETTING OREL

function checkMatchUserDetails(emailUser: string, passwordUser: string ):boolean | undefined{
    try {
        localStorage.setItem("TypeUser", "")
        let TypeUser : string;
        if(findTypeUserLogin(emailUser) === undefined) throw new Error("the user not exist")
        const startUid = Number(findTypeUserLogin(emailUser)?.uid.slice(0 , 3));
        if(findTypeUserLogin(emailUser)!.email === emailUser && findTypeUserLogin(emailUser)!.password === passwordUser ){
            
            if(startUid === 100) {
                TypeUser = "customer"
                localStorage.setItem("TypeUser", TypeUser)
                return true
            } else if (startUid === 200){
                TypeUser = "restaurant"
                localStorage.setItem("TypeUser", TypeUser)
                return true
            } else if (startUid === 300){
                TypeUser = "courier"
                localStorage.setItem("TypeUser", TypeUser)
                return true
            }
        } else {
                throw new Error("no match in detail user")
        }
    } catch (error) {
        console.error(error);
        return false
    }
}

function openMenuLogoutBtn(): void {
    try {
        const collapseUserLogout = document.querySelector(".user-box-profile-collapse")! as HTMLDListElement;
        const collapseUserLogoutIcon = document.querySelector(".user-box-profile i") as HTMLElement;

        const userBoxProfileClick = document.querySelector('.user-box-profile ')! as HTMLDListElement;;
        userBoxProfileClick?.addEventListener('click', (e) => {
            collapseUserLogout.classList.toggle('active')
            if (collapseUserLogout.classList.contains('active')) {
                collapseUserLogoutIcon.style.rotate = '180deg'
            } else {
                collapseUserLogoutIcon.style.rotate = '0deg'
            }
        })
    } catch (error) {
        console.error(error);
    }

}

function insideTheUser(): boolean | undefined {
    try {
        if (localStorage.getItem("userLogIn") === "true") {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error(error);
        return false
    }
}

function findTypeUserLogin(email: string): Customer | Restaurant | Courier | undefined {
    try {
        const searchInCustomer = customers.find(customer => customer.email === email) as Customer | undefined
        const searchInRestaurant = restaurants.find(restaurant => restaurant.email === email) as Restaurant | undefined
        const searchInCourier = couriers.find(courier => courier.email === email) as Courier | undefined
        if (searchInCustomer) {
            localStorage.setItem("userCur" , JSON.stringify(searchInCustomer))
            return  searchInCustomer 
        } else if (searchInRestaurant) {
            localStorage.setItem("userCur" , JSON.stringify(searchInRestaurant))
            return searchInRestaurant
        } else if (searchInCourier) {
            localStorage.setItem("userCur" , JSON.stringify(searchInCourier))
            return searchInCourier
        } else {
            throw new Error("the User not found")
        }

    } catch (error) {
        console.error(error);
        return undefined
    }
}
// LOGIN 
function handleSubmitLogIn(ev:any) {
    try {
        ev.preventDefault()
        const {email, password } = ev.target.elements
        console.log(email , password);
        const errorMsgEmailInputLog: HTMLElement = document.getElementById('errorMsgEmailInputLOG')! as HTMLElement;
        const errorMsgPasswordInputLog: HTMLElement = document.getElementById('errorMsgPasswordInputLOG')! as HTMLElement;

        if (email.value == '') {
            errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address."
            errorMsgEmailInputLog.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgEmailInputLog.parentElement!.classList.remove("empty")
        }
        if (password.value == '') {
            errorMsgPasswordInputLog!.innerText = "Please enter your password."
            errorMsgPasswordInputLog.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgPasswordInputLog.parentElement!.classList.remove("empty")
        }

        if (checkMatchUserDetails(email.value, password.value)) {
            directToCurTypePage()
            ev.target.reset()
        
        } else {
            const textWarning = document.getElementById('pNotLoginSucc')! as HTMLParagraphElement
            textWarning.innerHTML =
                `
             <i class="fa-solid fa-triangle-exclamation"></i>
              The email or password not match!
              `
            textWarning.style.color = "red";
        }

    }
    catch (error) {
        console.error(error);
    }
}
function logOut(): void {
    try {
        localStorage.setItem("userLogIn", "false")
    } catch (error) {
        console.error(error);
    }
}

function directToCurTypePage(){
if(getInfoFromStorageType() === "customer") {
    let newUrl = "./../customer-main/customer-main.html";
    window.location.replace(newUrl);
} else if (getInfoFromStorageType() === "restaurant"){
    let newUrl = "./../resaurant-main/restaurant-main.html";
    window.location.replace(newUrl);
}else if(getInfoFromStorageType() === "courier"){
    let newUrl = "./../courier-main/courier.html";
    window.location.replace(newUrl);
}
}
