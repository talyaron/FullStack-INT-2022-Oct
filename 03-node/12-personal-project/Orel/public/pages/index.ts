import { getCartDetails } from "./cart";
async function handleGetUser() {
    try {
        const response = await fetch('/api/users/get-user');
        const data = await response.json();
        if (!data) throw new Error('no get user from DB');

        if(typeof data.name === "string"){
   
            renderUserLogin(true , data.name , data.src)
            makeCart(true)
        } else {
            makeCart(false)
        }

    } catch (error) {
        console.error(error);
        renderUserLogin(false)
        makeCart(false)
     
    }
} 
export function renderUserLogin(bol: Boolean , name?:string , src?:string ) {
    try {
        const rootUserLogin:HTMLElement | null = document.getElementById('rootUserLogin')!
        const userCircleBtn:HTMLElement | null= document.querySelector('#userCircleBtn')
        if (bol) {
            if(!userCircleBtn) throw new Error("no found user Circle Btn")
            if(name){ userCircleBtn.innerText = name.slice(0 , 1).toUpperCase() }

            rootUserLogin.classList.add("activeLogin")

           
        } else {
            rootUserLogin.classList.remove("activeLogin")
        }
    } catch (error) {
        console.error(error)
    }
}

function handleClickBtnCircle(){
    try {
            const collapseMenuListUser:HTMLElement = document.querySelector('.collapseMenuListUser')!
            collapseMenuListUser.classList.toggle("active")
    } catch (error) {
        console.error(error)
    }
}

async function logout() {
  try {
      const response = await fetch('/api/users/logout');
      const data = await response.json();
      if (!data) throw new Error('no get user from DB');
          window.location.reload()
  } catch (error) {
      console.error(error);
      renderUserLogin(false)
   
  }
} 

function makeCart(ok:boolean){
    try {
        const middleChangeLi:HTMLElement|null = document.getElementById('middleChangeLi')
        if(!middleChangeLi) throw new Error("no found middle li")
            if(ok === true){
                middleChangeLi.innerHTML = `
                <button id="cartBtn">
               <a href="/myCart" > <i class="fa-solid fa-cart-shopping"></i></a>
                <span id="itemInCarts"></span>
            </button>
                `
            } else {
       
                middleChangeLi.innerHTML = `
                        <a href="/login" class="container__link login-btn">
                login
            </a>
            <a href="/register" class="container__link register-btn">
                register
            </a>
            `
            }
    } catch (error) {
        console.error(error)
    }
}

getCartDetails()